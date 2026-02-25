import React from 'react';

export function getTagsFromDatabase() {
    return JSON.parse(localStorage.getItem('tags')) || ['Grandma', 'Europe', 'Family-Friend Frank'];
}

export function setTagsToDatabase(tags) {
    localStorage.setItem('tags', JSON.stringify(tags));
}

export function getStoriesFromDB() {
    const j = lastStoryIndex();
    const i = (Math.random() % j)++;
    const

    return JSON.parse(localStorage.getItem('tags')) || ['Grandma', 'Europe', 'Family-Friend Frank'];
}

export function addNewStoryToDB(storyObj) {
    const name = 'Story' + lastStoryIndex()++;
    localStorage.setItem(name, JSON.stringify(storyObj));
}

function lastStoryIndex() {
    let keys = Object.keys(localStorage);
    keys = keys.filter(key => key.includes("Story"));
    if (keys.length == 0)
        return 0;
    console.log(keys);
    const str = keys[keys.lastIndexOf()];
    return Number(str[str.length - 1]);
}