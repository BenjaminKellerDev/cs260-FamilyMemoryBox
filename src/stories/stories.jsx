import React from 'react';
import './stories.css';
import { useNavigate } from 'react-router-dom';

import { getStoriesFromDB, addCommentToStory, addRandomStoryToDB } from '../database'

export function Stories({ currentUser }) {
    const navigate = useNavigate();

    const [stories, setStories] = React.useState([]);
    React.useEffect(() => {
        setStories(getStoriesFromDB());
    }, []);

    //websocket
    const [newStoriesNotification, setNSN] = React.useState(false);
    React.useEffect(() => {
        setInterval(() => {
            setNSN(true);
        }, 3000);
    }, [])

    function refreshPosts() {
        addRandomStoryToDB();
        setStories(getStoriesFromDB());
        setNSN(false);
    }

    return (
        <main>
            <div className="buttonContainer">
                <form action="drafting">
                    <button type="submit" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigate('../drafting'); }}>New Story</button>
                </form>
                {newStoriesNotification && <button className="btn btn-primary" onClick={refreshPosts}>New Posts! refresh now</button>}
            </div>
            {stories && stories.toReversed().map((obj, index) => <Story key={index} storyOBJ={obj} />)}

        </main>
    );

    function Story({ storyOBJ }) {
        const [comments, setComments] = React.useState(storyOBJ.comments);


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
                <CommentSection comments={comments} />
            </div>

        );

        function CommentSection({ comments }) {
            const [commentInput, setCommentInput] = React.useState();
            function addComment(e) {
                e.preventDefault();
                addCommentToStory(storyOBJ, { author: currentUser, text: commentInput });
                setComments([...comments, { author: currentUser, text: commentInput }]);
            }
            return (
                <section className="outOfFocus">
                    <h3>Comments</h3>
                    {comments && comments.map((commentObj, index) => <Comment key={index} commentObj={commentObj} />)}
                    <div>
                        <form>
                            <label htmlFor="addComment">Add a comment:</label>
                            <input type="text" id="addComment" name="addComment" className="shrink comment-form-control form-control" onChange={(e) => setCommentInput(e.target.value)}></input>
                            <button type="submit" className="btn btn-secondary" onClick={addComment}>Post</button>
                        </form>
                    </div>
                </section>

            );

            function Comment({ commentObj }) {
                return (
                    <div>
                        <div>
                            <i>{commentObj.author}:</i>
                            <p>{commentObj.text}</p>
                        </div>
                    </div>
                );
            }
        }

        function Tag({ name }) {
            return (<span className="tag">{name}</span>);
        }
    }
}