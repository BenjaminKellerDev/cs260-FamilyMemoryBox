import React from 'react';
import '../tags/tags.css';
import { useNavigate } from 'react-router-dom';

import { getTagsFromDatabase, getStoriesFromDB, addNewStoryToDB } from '../database'

export function Drafting({ currentUser }) {
    const navigate = useNavigate();

    const [tags, setTags] = React.useState([]);
    React.useEffect(() => {
        setTags(getTagsFromDatabase())
    }, []);

    const [title, setTitle] = React.useState('');
    const [storyTags, setStoryTags] = React.useState([]);
    const [story, setStory] = React.useState('');

    function toggleTag(e) {
        const tagText = e.target.name;
        if (storyTags.includes(tagText)) {
            setStoryTags(storyTags.filter(t => t !== tagText));
        } else {
            setStoryTags([...storyTags, tagText]);
        }
    }

    function uploadStory(e) {
        e.preventDefault();
        if (title.length !== 0 && story.length !== 0) {
            let storyOBJ = new Object();
            storyOBJ.title = title;
            storyOBJ.author = currentUser;
            storyOBJ.storyTags = storyTags;
            storyOBJ.story = story;
            addNewStoryToDB(storyOBJ);
            navigate('/stories');
        }
    }

    return (
        <main>
            <form action="stories">
                <label htmlFor="title">
                    <h2>Title:</h2>
                </label>
                <input type="text" id="title" name="title" className="shrink text-form-control form-control" onChange={(e) => setTitle(e.target.value)} />
                <fieldset id="tagContainer">
                    <legend>
                        <h4 className="padding10px">Select Tags:</h4>
                    </legend>
                    {tags.map((name, index) => <Tag key={index} name={name} />)}
                </fieldset>
                <label htmlFor="storyBox">
                    <h4 className="padding10px">Story:</h4>
                </label>
                <br></br>
                <textarea className="text-form-control form-control" id="storyBox" name="storyBox" onChange={(e) => setStory(e.target.value)}></textarea>
                <br></br>
                <button type="submit" className="btn btn-secondary" onClick={uploadStory}>Upload</button>
            </form>
        </main>
    );

    function Tag({ name }) {
        return <label className="tag">
            <span htmlFor="tag1" className="padding3px">{name}</span>
            <input type="checkbox" onChange={toggleTag} checked={storyTags.includes(name)} name={name}/* id="tag3" name="Family-Friend Frank" value="Family-Friend Frank" */></input>
        </label>
    }
}