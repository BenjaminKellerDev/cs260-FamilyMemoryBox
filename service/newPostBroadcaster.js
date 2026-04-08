const { WebSocketServer } = require('ws');


function newPostBroadcaster(app) {

    const socketServer = new WebSocketServer({ server: app });
}

module.exports = {
    newPostBroadcaster
}