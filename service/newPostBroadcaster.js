const { WebSocketServer, WebSocket } = require('ws');


function newPostBroadcaster(app) {

    const socketServer = new WebSocketServer({ server: app });

    socketServer.on('connection', (socket) => {
        socket.isAlive = true;

        socket.on('message', function message() {
            socketServer.clients.forEach((client) => {
                if (client !== socket && client.readyState == WebSocket.OPEN) {
                    client.send("update pls")// replace with story data??
                }

            });
        });
    })
}

module.exports = {
    newPostBroadcaster
}