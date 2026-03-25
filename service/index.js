const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;



let tags = [];
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

apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.findUserByAttribute('nameText', req.body.nameText)) {
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
    DB.addUser(user);
    return user.token;
}

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.findUserByAttribute('nameText', req.body.nameText);
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
    const user = await DB.findUserByAttribute('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});


//auth check middleware
async function authCheck(req, res, next) {

    //console.log('authCheck' + (Date.now() / 1000));
    const user = await DB.findUserByAttribute('token', req.cookies[authCookieName]);
    if (user === undefined || user === null) {
        res.status(401).send({ msg: "unauthorized" });
    } else {
        next();
    }

}
//add require json middleware to reduce crashes

apiRouter.get('/tags', authCheck, async (req, res) => {
    //console.log((Date.now() / 1000));
    const list = await DB.getTags();
    res.send(list);
});

apiRouter.post('/tags', authCheck, async (req, res) => {
    DB.addTag(req.body.newTag);
    const list = await DB.getTags();
    res.send(JSON.stringify(list));
});

apiRouter.delete('/tags', authCheck, async (req, res) => {
    await DB.removeTag(req.body.tagToRemove);
    //console.log((Date.now() / 1000));
    const list = await DB.getTags();
    res.send(JSON.stringify(list));
});

apiRouter.get('/stories', authCheck, async (req, res) => {
    res.send(stories);
});

apiRouter.post('/stories', authCheck, async (req, res) => {
    const newStory = req.body.newStory;
    if ('title' in newStory && 'author' in newStory && 'uuid' in newStory && 'story' in newStory) {
        stories.push(req.body.newStory);
        res.status(204).end();
    }
    else {
        res.status(400).send({ msg: 'story in wrong format' });
    }
});

apiRouter.put('/stories/comment', authCheck, async (req, res) => {
    const newComment = req.body.newComment;
    const storyUUID = req.body.storyUUID;
    if ('author' in newComment && 'text' in newComment && 'uuid' in newComment && storyUUID !== null) {
        newStory = await DB.findStoryByUUID(storyUUID);
        if (newStory) {
            newStory.comments.push(newComment);
            res.status(204).end();
        }
        else {
            res.status(400).send({ msg: 'unknown story uuid' });
        }
    }
    else {
        res.status(400).send({ msg: 'comment in wrong format' });
    }
});


//temp
apiRouter.post('/stories/random', authCheck, async (req, res) => {
    stories.push(getRandomStory());
    res.send();
});
function getRandomStory() {
    const titles = [
        "Guys, I just heard this from Frank.",
        "Okay, so apparently Frank told me this.",
        "Don’t quote me, but Frank mentioned something wild.",
        "I just got this from Frank.",
        "So I heard from Frank that this is true.",
        "Word is, Frank confirmed it.",
        "I just talked to Frank about this.",
        "This came straight from Frank.",
        "I heard through Frank that this happened.",
        "Frank literally just told me this.",
        "Frank just pulled me aside and said this.",
        "I wasn’t supposed to say anything, but Frank told me.",
        "This is straight from Frank’s mouth.",
        "Frank swears this is legit.",
        "Frank mentioned this earlier.",
        "I got this directly from Frank.",
        "Frank hinted at this happening.",
        "Frank brought this up yesterday.",
        "Frank says this is confirmed.",
        "Frank told me not to spread this, but...",
        "Apparently Frank was there when it happened.",
        "Frank insists this is real.",
        "Frank let this slip earlier.",
        "Frank said this off the record.",
        "This came up in a convo with Frank."
    ];
    const chuckNorrisJokes = [
        "Chuck Norris can take a screenshot of his blue screen.",
        "Chuck Norris writes code that optimizes itself.",
        "Chuck Norris doesn’t debug — his code simply apologizes.",
        "Chuck Norris can divide by zero.",
        "Chuck Norris doesn’t use version control — he controls versions.",
        "Chuck Norris can compile JavaScript.",
        "Chuck Norris doesn’t need comments — his code is self-intimidating.",
        "Chuck Norris finished the entire npm install instantly.",
        "Chuck Norris can overflow a boolean.",
        "Chuck Norris doesn’t use Stack Overflow — Stack Overflow uses Chuck Norris."
    ];
    const peoples = [
        "Linus Torvalds",
        "Richard Stallman",
        "Gabe Newell",
        "James Gosling",
        "Uncle Bob",
        "Joe M.",
        "Jan van Eyck",
        "keith the c++ mascot"
    ];

    let newStory = {
        title: titles[Math.floor(Math.random() * titles.length)],
        author: "Grandma",
        postTime: Math.floor(Date.now() / 1000),
        uuid: crypto.randomUUID(),
        storyTags: ["Family-Friend Frank"],
        story: chuckNorrisJokes[Math.floor(Math.random() * chuckNorrisJokes.length)],
        comments: [
            {
                author: peoples[Math.floor(Math.random() * peoples.length)],
                text: "woah.",
                uuid: crypto.randomUUID()
            }
        ]
    }


    return newStory;

}
// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});