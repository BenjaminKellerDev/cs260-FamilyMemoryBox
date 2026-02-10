import React from 'react';
import './stories.css';

export function Stories() {
    return (
        <main>
            <div className="buttonContainer">
                <form action="drafting">
                    <button type="submit" className="btn btn-secondary">New Story</button>
                </form>
                <button className="newPostBtn btn btn-primary">New Posts! refresh now</button>
            </div>
            {/*  <!-- story 1--> */}
            <div className="story">
                <hr></hr>
                <h2 className="text-aline-center">That one time I went to that one place</h2>
                <h5 className="text-aline-center">By Grandma</h5>
                <p className="tagContainer"><span className="tagTitleSpacing"><i>Tags: </i></span><span
                    className="tag">Grandma</span> <span className="tag">Europe</span> <span className="tag">Family-Friend
                        Frank</span>
                </p>
                <p className="leftElement">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. </p>
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
                            <label for="addComment">Add a comment:</label>
                            <input type="text" id="addComment" name="addComment" className="shrink form-control"></input>
                            <button type="submit" className="btn btn-secondary">Post</button>
                        </form>
                    </div>
                </section>
            </div>

            {/*  <!-- story 2--> */}
            <div className="story">
                <hr></hr>
                <h2 className="text-aline-center">The time I went to that one place, again!!</h2>
                <h5 className="text-aline-center">By Grandma</h5>
                <p className="tagContainer"><span className="tagTitleSpacing"><i>Tags: </i></span><span
                    className="tag">Grandma</span>
                    <span className="tag">Europe</span>
                </p>
                <p className="leftElement">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde ipsa
                    repellat iure vel ipsum
                    nostrum molestiae distinctio facilis adipisci necessitatibus quasi tempora eveniet, quisquam saepe id?
                    Natus, illum excepturi. </p>
                <hr></hr>
                <section className="outOfFocus">
                    <h3>Comments</h3>
                    <div>
                        <form>
                            <label for="addComment">Add a comment:</label>
                            <input type="text" id="addComment" name="addComment" className="shrink form-control"></input>
                            <button type="submit" className="btn btn-secondary">Post</button>
                        </form>
                    </div>
                </section>
            </div>


        </main>
    );
}