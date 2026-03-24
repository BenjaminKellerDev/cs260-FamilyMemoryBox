const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('MemoryBox');
const dbUsers = db.collection('users');
const dbTags = db.collection('tags');
const dbStories = db.collection('stories');

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
