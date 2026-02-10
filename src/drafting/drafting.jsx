import React from 'react';

export function Drafting() {
    return (
        <main>
            <form action="stories.html">
                <label for="title">
                    <h2>Title:</h2>
                </label>
                <input type="text" id="title" name="title" className="shrink form-control" />
                <fieldset id="tagContainer">
                    <legend>
                        <h4 className="padding10px">Select Tags:</h4>
                    </legend>
                    <label className="tag">
                        <span for="tag1">Grandma</span>
                        <input type="checkbox" id="tag1" name="Grandma" value="Grandma"></input>
                    </label>
                    <label className="tag">
                        <span for="tag1">Europe</span>
                        <input type="checkbox" id="tag2" name="Europe" value="Europe"></input>
                    </label>
                    <label className="tag">
                        <span for="tag1">Family-Friend Frank</span>
                        <input type="checkbox" id="tag3" name="Family-Friend Frank" value="Family-Friend Frank"></input>
                    </label>
                </fieldset>
                <label for="storyBox">
                    <h4 className="padding10px">Story:</h4>
                </label>
                <br></br>
                <textarea className="form-control" id="storyBox" name="storyBox"></textarea>
                <br></br>
                <button type="submit" className="btn btn-secondary">Upload</button>
            </form>
        </main>
    );
}