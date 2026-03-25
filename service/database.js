const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('MemoryBox');
const usersCollection = db.collection('users');
const tagCollection = db.collection('tags');
const storiesCollection = db.collection('stories');

//connection test from simon
(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log("connected to database");
        validateDefaults();

    } catch (ex) {
        console.log("connection to database is not working lol");
        process.exit(1);
    }
})();

async function validateDefaults() {
    if (null == await tagCollection.findOne()) {
        tagCollection.insertOne({ tagList: 'tagList', list: ['Europe', 'Grandma', 'Family-Friend Frank'] })
    }
    if (null == await storiesCollection.findOne()) {
        storiesCollection.insertOne(defaultStory)
    }
}

function findUserByAttribute(attribute, key) {
    if (!key) return null;
    return usersCollection.findOne({ [attribute]: key }); //promise
}

function findStoryByUUID(uuid) {
    if (!uuid) return null;
    return storiesCollection.findOne({ uuid: uuid });//promise
}

async function addUser(user) {
    await usersCollection.insertOne(user);
}

async function addTag(tag) {
    await tagCollection.updateOne({ tagList: 'tagList' }, { $push: { list: tag } });
}

module.exports = {
    findUserByAttribute,
    findStoryByUUID,
    addUser, addTag
}

const defaultStory = {
    title: "That one time I went to that one place",
    author: "Grandma",
    postTime: 1772074405,
    uuid: crypto.randomUUID(),
    storyTags: ["Grandma", "Europe", "Family-Friend Frank"],
    story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.",
    comments: [
        {
            author: "Dad",
            text: "I remember that!!",
            uuid: crypto.randomUUID()
        }, {
            author: "Grandson",
            text: "Wow! So cool! Is that where the turboencabulator you have in the garage came from?",
            uuid: crypto.randomUUID()
        }
    ]
}