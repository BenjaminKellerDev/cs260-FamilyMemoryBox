
class NotificationSystem {
    constructor() {
        //let port = window.location.port;
        let port = 4000;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    }
}

const notificationSystem = new NotificationSystem();
export { notificationSystem }