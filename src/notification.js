
class NotificationSystem {

    handlers = [];

    constructor() {
        let port = window.location.port;
        //let port = 4000;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onmessage = async (message) => {
            this.handlers.forEach(element => {
                element();
            });
        }
    }

    addHandler(handel) {
        this.handlers.push(handel);
    }

    sendUpdateNotification() {
        this.socket.send('new content, update pls');
    }


}
const notificationSystem = new NotificationSystem();
export { notificationSystem }