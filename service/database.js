const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('MemoryBox');
const dbUsers = db.collection('users');
const dbTags = db.collection('tags');
const dbStories = db.collection('stories');


