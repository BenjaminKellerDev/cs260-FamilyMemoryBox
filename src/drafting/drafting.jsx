import React from 'react';
import '../tags/tags.css';

import { getTagsFromDatabase, getStoriesFromDB, addNewStoryToDB } from '../database'

export function Drafting() {
    React.useEffect(() => {
        setTags(getTagsFromDatabase())
    }, []);

    const [tags, setTags] = React.useState([]);

    return (
        <main>
            <form action="stories">
                <label htmlFor="title">
                    <h2>Title:</h2>
                </label>
                <input type="text" id="title" name="title" className="shrink text-form-control form-control" />
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
                <textarea className="text-form-control form-control" id="storyBox" name="storyBox"></textarea>
                <br></br>
                <button type="submit" className="btn btn-secondary">Upload</button>
            </form>
        </main>
    );

    function Tag({ name }) {
        return <label className="tag">
            <span htmlFor="tag1" className="padding3px">{name}</span>
            <input type="checkbox" id="tag3" name="Family-Friend Frank" value="Family-Friend Frank"></input>
        </label>
    }
}