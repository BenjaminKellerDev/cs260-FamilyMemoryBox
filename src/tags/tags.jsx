import React from 'react';
import './tags.css';

import { getTagsFromDatabase, setTagsToDatabase } from '../database'

export function Tags() {

    React.useEffect(() => {
        setTags(getTagsFromDatabase())
    }, []);

    const [tags, setTags] = React.useState([]);

    const [tagInput, setTagInput] = React.useState('');
    function addTag(e) {
        e.preventDefault();
        if (tagInput.length != 0 && !tags.includes(tagInput)) {
            setTags(oldTags => {
                const newTags = [...oldTags, tagInput]
                setTagsToDatabase(newTags);
                setTagInput("");
                return newTags;
            })
        }
    }

    function removeTag(e) {
        setTags(oldTags => {
            const newTags = tags.filter(tags => tags != e.target.firstChild.data)
            setTagsToDatabase(newTags);
            return newTags;
        })
    }

    return (
        <main>
            <section>
                <h1>Current Tags:</h1>
                <div id="tagContainer">
                    {tags.map((name, index) => <Tag key={index} name={name} />)}
                </div>
            </section>
            <form action="tags">
                <input type="text" autoComplete="off" id="tagBox" name="newTag" className="shrink text-form-control form-control" placeholder="Tag Name" onChange={e => setTagInput(e.target.value)} value={tagInput} />
                <button type="submit" className="btn btn-secondary" onClick={addTag}>Add Tag</button>
            </form>
        </main>
    );

    function Tag({ name }) {
        return <span className="tag" onClick={removeTag}>{name} ❌</span>
    }
}

