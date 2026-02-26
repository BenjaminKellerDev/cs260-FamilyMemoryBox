import React from 'react';

const defaultStory = {
    title: "That one time I went to that one place",
    author: "Grandma",
    postTime: 1772074405,
    storyTags: ["Grandma", "Europe", "Family-Friend Frank"],
    story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa repellat iure vel ipsum nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id? Natus, illum excepturi.",
    comments: [
        {
            author: "Dad",
            text: "I remember that!!"
        }, {
            author: "Grandson",
            text: "Wow! So cool! Is that where the turboencabulator you have in the garage came from?"
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
    return JSON.parse(localStorage.getItem('Stories')) || [defaultStory];
}

export function addNewStoryToDB(storyObj) {
    const storyList = JSON.parse(localStorage.getItem('Stories')) || [defaultStory];
    localStorage.setItem('Stories', JSON.stringify([...storyList, storyObj]));
}

export function addCommentToStory(storyObj, commentObj) {
    const storyList = JSON.parse(localStorage.getItem('Stories')) || [defaultStory];
    storyList.find(story => JSON.stringify(story) === JSON.stringify(storyObj)).comments.push(commentObj);
    localStorage.setItem('Stories', JSON.stringify(storyList));
}

export function addRandomStoryToDB() {
    const chuckNorrisJokes = [
        "Chuck Norris can take a screenshot of his blue screen.",
        "Chuck Norris writes code that optimizes itself.",
        "Chuck Norris doesn’t debug — his code simply apologizes.",
        "Chuck Norris can divide by zero.",
        "Chuck Norris doesn’t use version control — he controls versions.",
        "Chuck Norris can compile JavaScript.",
        "Chuck Norris doesn’t need comments — his code is self-intimidating.",
        "Chuck Norris finished the entire npm install instantly.",
        "Chuck Norris can overflow a boolean.",
        "Chuck Norris doesn’t use Stack Overflow — Stack Overflow uses Chuck Norris."
    ];
    const peoples = [
        "Linus Torvalds",
        "Richard Stallman",
        "Gabe Newell",
        "James Gosling",
        "Uncle Bob",
        "Joe M.",
        "Jan van Eyck",
        "keith the c++ mascot"
    ];

    let newStory = {
        title: "Guys, I just heard this from Frank",
        author: "Grandma",
        postTime: 0,
        storyTags: ["Family-Friend Frank"],
        story: chuckNorrisJokes[Math.floor(Math.random() * chuckNorrisJokes.length)],
        comments: [
            {
                author: peoples[Math.floor(Math.random() * peoples.length)],
                text: "woah."
            }
        ]
    }
    console.log(peoples[Math.floor(Math.random() * peoples.length)]);
    console.log(newStory);
    addNewStoryToDB(newStory);

}