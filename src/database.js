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
    storyList.find(story => story.uuid === storyObj.uuid).comments.push(commentObj);
    localStorage.setItem('Stories', JSON.stringify(storyList));
}

export function updateStoryComments(storyObj) {
    const storyList = JSON.parse(localStorage.getItem('Stories')) || [defaultStory];
    storyList.find(story => story.uuid === storyObj.uuid).comments = storyObj.comments;
    console.log(storyObj);
    console.log(storyList);
    localStorage.setItem('Stories', JSON.stringify(storyList));
}

export function addRandomStoryToDB() {
    const titles = [
        "Guys, I just heard this from Frank.",
        "Okay, so apparently Frank told me this.",
        "Don’t quote me, but Frank mentioned something wild.",
        "I just got this from Frank.",
        "So I heard from Frank that this is true.",
        "Word is, Frank confirmed it.",
        "I just talked to Frank about this.",
        "This came straight from Frank.",
        "I heard through Frank that this happened.",
        "Frank literally just told me this.",
        "Frank just pulled me aside and said this.",
        "I wasn’t supposed to say anything, but Frank told me.",
        "This is straight from Frank’s mouth.",
        "Frank swears this is legit.",
        "Frank mentioned this earlier.",
        "I got this directly from Frank.",
        "Frank hinted at this happening.",
        "Frank brought this up yesterday.",
        "Frank says this is confirmed.",
        "Frank told me not to spread this, but...",
        "Apparently Frank was there when it happened.",
        "Frank insists this is real.",
        "Frank let this slip earlier.",
        "Frank said this off the record.",
        "This came up in a convo with Frank."
    ];
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
        title: titles[Math.floor(Math.random() * titles.length)],
        author: "Grandma",
        postTime: Math.floor(Date.now() / 1000),
        uuid: crypto.randomUUID(),
        storyTags: ["Family-Friend Frank"],
        story: chuckNorrisJokes[Math.floor(Math.random() * chuckNorrisJokes.length)],
        comments: [
            {
                author: peoples[Math.floor(Math.random() * peoples.length)],
                text: "woah.",
                uuid: crypto.randomUUID()
            }
        ]
    }

    const storyList = JSON.parse(localStorage.getItem('Stories')) || [defaultStory];
    while (storyList.find(story => story.title === newStory.title)) {
        newStory.title = titles[Math.floor(Math.random() * titles.length)];
    }

    addNewStoryToDB(newStory);

}