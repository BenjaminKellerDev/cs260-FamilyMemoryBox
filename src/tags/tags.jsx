import React from 'react';
import './tags.css';

export function Tags() {
    return (
        <main>
            <section>
                <h1>Current Tags:</h1>
                <div id="tagContainer">
                    <span className="tag">Grandma ❌</span> <span className="tag">Europe ❌</span> <span className="tag">Family-Friend
                        Frank ❌</span>
                </div>
            </section>
            <form action="tags">
                <input type="text" id="tagBox" name="newTag" className="shrink text-form-control form-control" placeholder="Tag Name" />
                <button type="submit" className="btn btn-secondary">Add Tag</button>
            </form>
        </main>
    );
}