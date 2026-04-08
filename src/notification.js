
class NotificationSystem {


    constructor(onMessage) {
        //let port = window.location.port;
        let port = 4000;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onmessage = async (message) => {
            onMessage();
        }
    }


}

export { NotificationSystem }