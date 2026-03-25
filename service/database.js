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
    } catch (ex) {
        console.log("connection to database is not working lol");
        process.exit(1);
    }
})();

function findUserByAttribute(attribute, key) {
    if (!key) return null;
    return usersCollection.findOne({ [attribute]: key }); //promise
}

function findStoryByUUID(uuid) {
    if (!uuid) return null;
    return storiesCollection.findOne({ uuid: uuid });//promise
}

module.exports = {
    findUserByAttribute
}