import React from 'react';

import { notificationSystem } from '../notification'
export function Popup({ refreshPosts }) {
    //websocket

    const [messageCount, updateCount] = React.useState(0);
    notificationSystem.addHandler(() => {
        updateCount(messageCount + 1);
    });
    const [newStoriesNotification, setNSN] = React.useState(false);
    React.useEffect(() => {
        if (messageCount > 0)
            setNSN(true);
    }, [messageCount])

    return (<button className="btn btn-primary" onClick={() => {
        refreshPosts();
        setNSN(false);
    }} style={{ display: newStoriesNotification ? 'inline-block' : 'none' }}>New Posts! refresh now</button>);

} 