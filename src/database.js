export async function getTagsFromDatabase() {
    return await endpointHandler('/api/tags', 'get');
}

export async function postTagToDatabase(tag) {
    return await endpointHandler('/api/tags', 'post', { newTag: tag });
}

export async function deleteTagFromDatabase(tag) {
    return await endpointHandler('/api/tags', 'delete', { tagToRemove: tag });
}

export async function getStoriesFromDB() {
    return await endpointHandler('/api/stories', 'get');
}

export async function addNewStoryToDB(storyObj) {
    return await endpointHandler('/api/stories', 'post', { newStory: storyObj });
}

export async function addCommentToStory(storyUUID, newComment) {
    return await endpointHandler('/api/stories/comment', 'put', { storyUUID: storyUUID, newComment: newComment });
}

export async function addRandomStoryToDB() {
    return await endpointHandler('/api/stories/random', 'post');
}

async function endpointHandler(endpoint, method, obj = {}) {
    let params = {
        method: method,
    }
    if (method !== 'get') {
        params.body = JSON.stringify(obj);
        params.headers = {
            'Content-type': 'application/json; charset=UTF-8'
        };
    }

    const response = await fetch(endpoint, params);

    if (response.status >= 500 || response.status == 404) {
        throw new Error("network error");
    }

    let responseJSON;
    try {
        responseJSON = await response.json();
    } catch (e) { return null; }

    if ('msg' in responseJSON) {
        throw new Error(responseJSON.msg);
    }
    return responseJSON;
}

