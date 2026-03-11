const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

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
    user = findUserByAttribute('nameText', req.body.nameText)
    if (user === null) {
        res.status(409).send({ msg: 'name already taken' });
    } else {

    }
});

async function findUserByAttribute(attribute, key) {
    if (!key) return null;
    return await users.find((u) => u[attribute] === key);
}