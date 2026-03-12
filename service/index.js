const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let tags = ['Europe', 'Grandma', 'Family-Friend Frank'];
let stories = [];
let users = [];

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}
apiRouter.get('/test', async (req, res) => { res.body = "hi"; res.send(); })

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUserByAttribute('nameText', req.body.nameText)) {
        res.status(409).send({ msg: 'name already taken' });
    } else {
        const token = await createUser(req.body.nameText, req.body.passwordText);
        setAuthCookie(res, token);
        res.send({ nameText: req.body.nameText });
    }
});

async function createUser(nameText, passwordText) {
    const passwordHash = await bcrypt.hash(passwordText, 10);
    const user = {
        nameText: nameText,
        password: passwordHash,
        token: uuid.v4()
    };
    users.push(user);
    return user.token;
}

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUserByAttribute('nameText', req.body.nameText);
    if (user) {
        if (await bcrypt.compare(req.body.passwordText, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ nameText: req.body.nameText });
            return;
        }
    }
    res.status(401).send({ msg: "unauthorized" });
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUserByAttribute('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

async function findUserByAttribute(attribute, key) {
    if (!key) return null;
    return await users.find((u) => u[attribute] === key);
}

apiRouter.get('/tags', async (req, res) => {
    if (!checkAuth(req, res)) { return; }
    res.send(tags);
});

apiRouter.post('/tags', async (req, res) => {
    if (!checkAuth(req, res)) { return; }
    if (!tags.includes(req.body.newTag)) {
        tags.push(req.body.newTag);
    }
    res.status(204).end();
});

apiRouter.delete('/tags', async (req, res) => {
    if (!checkAuth(req, res)) { return; }
    tags = tags.filter(t => t !== req.body.tagToRemove);
    res.status(204).end();
});

apiRouter.get('/stories', async (req, res) => {
    if (!checkAuth(req, res)) { return; }
    res.send(stories);
});

apiRouter.post('/stories', async (req, res) => {
    if (!checkAuth(req, res)) { return; }
    const newStory = req.body.newStory;
    if ('title' in newStory && 'author' in newStory && 'uuid' in newStory && 'story' in newStory) {
        stories.push(req.body.newStory);
        res.status(204).end();
    }
    else {
        res.status(400).send({ msg: 'story in wrong format' });
    }
});

async function checkAuth(req, res) {
    const user = await findUserByAttribute('token', req.cookies[authCookieName]);
    if (user === null) {
        res.status(401).send({ msg: "unauthorized" });
        return false;
    } else { return true; }
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});