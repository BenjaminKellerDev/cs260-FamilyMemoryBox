import React from 'react';

export function getTagsFromDatabase() {
    return JSON.parse(localStorage.getItem('tags')) || ['Grandma', 'Europe', 'Family-Friend Frank'];
}

export function setTagsToDatabase(tags) {
    localStorage.setItem('tags', JSON.stringify(tags));
}

export function getStoriesFromDB() {
    console.log(JSON.parse(localStorage.getItem('Stories')) || []);
    return JSON.parse(localStorage.getItem('Stories')) || [];
}

export function addNewStoryToDB(storyObj) {
    console.log(storyObj);
    const storyList = JSON.parse(localStorage.getItem('Stories') || '[]')
    localStorage.setItem('Stories', JSON.stringify([...storyList, storyObj]));
}
