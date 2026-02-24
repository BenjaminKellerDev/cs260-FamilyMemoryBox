import React from 'react';
import './tags.css';

export function Tags() {
    const [tags, setTags] = React.useState(['Grandma', 'Europe', 'Family-Friend Frank']);

    const [tagInput, setTagInput] = React.useState('');
    function addTag(e) {
        e.preventDefault();
        if (tagInput.length != 0) {
            setTags([...tags, tagInput]);
            setTagInput('');
            console.log(tags);
        }
    }

    return (
        <main>
            <section>
                <h1>Current Tags:</h1>
                <div id="tagContainer">
                    <span className="tag">Grandma ❌</span> <span className="tag">Europe ❌</span> <span className="tag">Family-Friend
                        Frank ❌</span><Tag name={'test'} />
                </div>
            </section>
            <form action="tags">
                <input type="text" id="tagBox" name="newTag" className="shrink text-form-control form-control" placeholder="Tag Name" onChange={e => setTagInput(e.target.value)} />
                <button type="submit" className="btn btn-secondary" onClick={addTag}>Add Tag</button>
            </form>
        </main>
    );
}

function Tag({ name }) {
    return <span className="tag">{name} ❌</span>
}