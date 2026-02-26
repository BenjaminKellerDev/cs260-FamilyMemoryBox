import React from 'react';
import './stories.css';
import { useNavigate } from 'react-router-dom';

import { getStoriesFromDB, addCommentToStory, updateStoryComments, addRandomStoryToDB } from '../database'
import { Popup } from './popup'
export function Stories({ currentUser }) {
    const navigate = useNavigate();

    const [stories, setStories] = React.useState([]);
    React.useEffect(() => {
        setStories(getStoriesFromDB());
    }, []);


    function refreshPosts() {
        addRandomStoryToDB();
        setStories(getStoriesFromDB());
    }

    return (
        <main>
            <div className="buttonContainer">
                <form action="drafting">
                    <button type="submit" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigate('../drafting'); }}>New Story</button>
                </form>
                <Popup refreshPosts={refreshPosts} />
            </div>
            {stories && stories.toReversed().map((obj) => <Story key={obj.uuid} storyOBJ={obj} />)}

        </main>
    );

    function Story({ storyOBJ }) {
        const [comments, setComments] = React.useState(storyOBJ.comments);

        React.useEffect(() => { storyOBJ.comments = comments; updateStoryComments(storyOBJ) }, [comments]);

        return (
            <div className="story">
                <hr></hr>
                <h2 className="text-aline-center">{storyOBJ.title}</h2>
                <h5 className="text-aline-center">By {storyOBJ.author}</h5>
                <p className="tagContainer"><span className="tagTitleSpacing"><i>Tags: </i></span>
                    {storyOBJ.storyTags.map((name, index) => <Tag key={name} name={name} />)}
                </p>
                <p className="leftElement">{storyOBJ.story} </p>
                <hr></hr>
                <CommentSection comments={comments} />
            </div>

        );

        function CommentSection({ comments }) {
            const [commentInput, setCommentInput] = React.useState('');
            function addComment(e) {
                e.preventDefault();
                if (commentInput.length > 0) {
                    const newComment = { author: currentUser, text: commentInput, uuid: crypto.randomUUID() }
                    //addCommentToStory(storyOBJ, newComment);
                    setComments([...comments, newComment]);
                    setCommentInput('');
                }
            }
            return (
                <section className="outOfFocus">
                    <h3>Comments</h3>
                    {comments && comments.map((commentObj) => <Comment key={commentObj.uuid} commentObj={commentObj} />)}
                    <div>
                        <form>
                            <label htmlFor="addComment">Add a comment:</label>
                            <input type="text" id="addComment" name="addComment" className="shrink comment-form-control form-control" onChange={(e) => setCommentInput(e.target.value)} value={commentInput}></input>
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