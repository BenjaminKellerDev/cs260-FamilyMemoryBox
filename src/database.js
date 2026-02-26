import React from 'react';

const defaultStory = {
    title: "That one time I went to that one place",
    author: "Grandma",
    postTime: 1772074405,
    storyTags: ["Grandma", "Europe", "Family-Friend Frank"],
    story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.",
    comments: [
        {
            "author": "Dad",
            "text": "I remember that!!"
        }, {
            "author": "Grandson",
            "text": "Wow! So cool! Is that where the turboencabulator you have in the garage came from?"
        }
    ]
}
export function getTagsFromDatabase() {
    return JSON.parse(localStorage.getItem('tags')) || ['Grandma', 'Europe', 'Family-Friend Frank'];
}

export function setTagsToDatabase(tags) {
    localStorage.setItem('tags', JSON.stringify(tags));
}

export function getStoriesFromDB() {
    return JSON.parse(localStorage.getItem('Stories')) || defaultStory;
}

export function addNewStoryToDB(storyObj) {
    const storyList = JSON.parse(localStorage.getItem('Stories')) || defaultStory;
    localStorage.setItem('Stories', JSON.stringify([...storyList, storyObj]));
}

export function addCommentToStory(storyObj, commentObj) {
    const storyList = JSON.parse(localStorage.getItem('Stories')) || defaultStory;
    storyList.find(story => JSON.stringify(story) === JSON.stringify(storyObj)).comments.push(commentObj);
    localStorage.setItem('Stories', JSON.stringify(storyList));
}