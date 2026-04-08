import React from 'react';

import { notificationSystem } from '../notification'
export function Popup({ refreshPosts }) {
    //websocket

    const [messageCount, updateCount] = React.useState(0);

    const [showSpinner, setSpinner] = React.useState(false);

    notificationSystem.addHandler(() => {
        updateCount(messageCount + 1);
    });
    const [newStoriesNotification, setNSN] = React.useState(false);
    React.useEffect(() => {
        if (messageCount > 0)
            setNSN(true);
    }, [messageCount])

    return (<div><button className="btn btn-primary" onClick={async () => {
        setNSN(false);
        setSpinner(true);
        await refreshPosts();
        setSpinner(false);
    }} style={{ display: newStoriesNotification ? 'inline-block' : 'none' }}>New Posts! refresh now</button>
        <img style={{ display: showSpinner ? 'inline-block' : 'none' }} src='https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif'></img>
    </div>);

} 