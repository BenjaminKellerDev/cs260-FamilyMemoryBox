import React from 'react';
import './tags.css';

import { getTagsFromDatabase, postTagToDatabase, deleteTagFromDatabase } from '../database'

export function Tags() {
    const [errorMSG, setErrorMSG] = React.useState('');


    React.useEffect(() => {
        getTagsFromDatabase()
            .then(setTags)
            .catch(err => setErrorMSG(err.message));
    }, []);

    const [tags, setTags] = React.useState([]);

    const [tagInput, setTagInput] = React.useState('');
    async function addTag(e) {
        e.preventDefault();
        if (tagInput.length != 0 && !tags.includes(tagInput)) {
            const newTags = await postTagToDatabase(tagInput);
            setTags(newTags);
            setTagInput("");
        }
    }

    async function removeTag(e) {
        const newTags = await deleteTagFromDatabase(e.target.firstChild.data);
        setTags(newTags);
    }

    return (
        <main>
            <section>
                <h1>Current Tags:</h1>
                <div id="tagContainer">
                    {tags.map((name, index) => <Tag key={index} name={name} />)}
                </div>
                <div className='errorMSG'> {errorMSG}</div>
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

