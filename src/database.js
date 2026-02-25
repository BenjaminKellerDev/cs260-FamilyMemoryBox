import React from 'react';

export function getTagsFromDatabase() {
    return JSON.parse(localStorage.getItem('tags')) || ['Grandma', 'Europe', 'Family-Friend Frank'];
}

export function setTagsToDatabase(tags) {
    localStorage.setItem('tags', JSON.stringify(tags));
}

export function getStoriesFromDB() {
    return JSON.parse(localStorage.getItem('Stories')) || [];
}

export function addNewStoryToDB(storyObj) {
    const storyList = JSON.parse(localStorage.getItem('Stories') || '[]')
    localStorage.setItem('Stories', JSON.stringify([...storyList, storyObj]));
}
