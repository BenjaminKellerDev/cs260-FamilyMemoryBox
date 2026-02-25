import React from 'react';
import './stories.css';
import { useNavigate } from 'react-router-dom';

import { getStoriesFromDB } from '../database'

export function Stories() {
    const navigate = useNavigate();

    const [stories, setStories] = React.useState([]);
    React.useEffect(() => {
        setStories(getStoriesFromDB());
    }, []);

    return (
        <main>
            <div className="buttonContainer">
                <form action="drafting">
                    <button type="submit" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigate('../drafting'); }}>New Story</button>
                </form>
                <button className="newPostBtn btn btn-primary">New Posts! refresh now</button>
            </div>
            {stories.toReversed().map((obj, index) => <Story key={index} storyOBJ={obj} />)}

        </main>
    );

    function Story({ storyOBJ }) {
        return (
            <div className="story">
                <hr></hr>
                <h2 className="text-aline-center">{storyOBJ.title}</h2>
                <h5 className="text-aline-center">By {storyOBJ.author}</h5>
                <p className="tagContainer"><span className="tagTitleSpacing"><i>Tags: </i></span>
                    {storyOBJ.storyTags.map((name, index) => <Tag key={index} name={name} />)}
                </p>
                <p className="leftElement">{storyOBJ.story} </p>
                <hr></hr>
                <section className="outOfFocus">
                    <h3>Comments</h3>
                    <div>
                        <div>
                            <i>Dad:</i>
                            <p>I remember that!!</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i>Grandson:</i>
                            <p>Wow! So cool! Is that where the turboencabulator you have in the garage came from?</p>
                        </div>
                    </div>
                    <div>
                        <form>
                            <label htmlFor="addComment">Add a comment:</label>
                            <input type="text" id="addComment" name="addComment" className="shrink comment-form-control form-control"></input>
                            <button type="submit" className="btn btn-secondary">Post</button>
                        </form>
                    </div>
                </section>
            </div>

        );

        function Tag({ name }) {
            return (<span className="tag">{name}</span>);
        }
    }
}