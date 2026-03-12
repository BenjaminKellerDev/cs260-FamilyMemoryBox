import React from 'react';

const defaultStory = {
    title: "That one time I went to that one place",
    author: "Grandma",
    postTime: 1772074405,
    uuid: crypto.randomUUID(),
    storyTags: ["Grandma", "Europe", "Family-Friend Frank"],
    story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.",
    comments: [
        {
            author: "Dad",
            text: "I remember that!!",
            uuid: crypto.randomUUID()
        }, {
            author: "Grandson",
            text: "Wow! So cool! Is that where the turboencabulator you have in the garage came from?",
            uuid: crypto.randomUUID()
        }
    ]
}
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

export async function addCommentToStory(storyObj, newComment) {
    return await endpointHandler('/stories/comment', 'put', { storyUUID: storyObj.uuid, newComment: newComment });
}

export async function addRandomStoryToDB() {
    return await endpointHandler('/stories/random', 'post');
}

async function endpointHandler(endpoint, method, obj = "") {
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

    if (response.status >= 500) {
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

