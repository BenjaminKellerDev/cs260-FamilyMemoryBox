
class NotificationSystem {

    messages = [];
    constructor() {
        //let port = window.location.port;
        let port = 4000;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onmessage = async (message) => {
            this.messages.push(JSON.parse(await message.data.text()));
        }
    }
}

const notificationSystem = new NotificationSystem();
export { notificationSystem }