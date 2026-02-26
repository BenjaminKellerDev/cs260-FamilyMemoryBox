import React from 'react';

export function Popup({ refreshPosts }) {
    //websocket
    const [newStoriesNotification, setNSN] = React.useState(false);
    React.useEffect(() => {
        setInterval(() => {
            setNSN(true);
        }, 3000);
    }, [])

    return (<button className="btn btn-primary" onClick={() => {
        refreshPosts();
        setNSN(false);
    }} style={{ display: newStoriesNotification ? 'inline-block' : 'none' }}>New Posts! refresh now</button>);

} 