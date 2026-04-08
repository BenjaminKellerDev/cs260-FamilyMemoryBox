const { WebSocketServer } = require('ws');


export function newPostBroadcaster(app) {

    const socketServer = new WebSocketServer({ server: app });
}