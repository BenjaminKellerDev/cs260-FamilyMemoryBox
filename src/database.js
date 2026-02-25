import React from 'react';

export function getTagsFromDatabase() {
    return JSON.parse(localStorage.getItem('tags')) || ['Grandma', 'Europe', 'Family-Friend Frank'];
}

export function setTagsToDatabase(tags) {
    localStorage.setItem('tags', JSON.stringify(tags));
}

export function getStoriesFromDB() {
    return JSON.parse(localStorage.getItem('Stories') || "[{\"title\":\"That one time I went to that one place\",\"author\":\"Grandma\",\"storyTags\":[\"Grandma\",\"Europe\",\"Family-Friend Frank\"],\"story\":\"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.\"}]");
}

export function addNewStoryToDB(storyObj) {
    console.log(storyObj);
    const storyList = JSON.parse(localStorage.getItem('Stories') || '[]')
    localStorage.setItem('Stories', JSON.stringify([...storyList, storyObj]));
}
