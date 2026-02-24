import React from 'react';
import './tags.css';

export function Tags() {

    //use effect to automatically call tags database here
    const [tags, setTags] = React.useState(['Grandma', 'Europe', 'Family-Friend Frank']);

    const [tagInput, setTagInput] = React.useState('');
    function addTag(e) {
        e.preventDefault();
        if (tagInput.length != 0) {
            setTags([...tags, tagInput]);
            setTagInput("");
        }
    }

    function removeTag(e) {
        setTags(tags.filter(tags => tags != e.target.firstChild.data))
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

