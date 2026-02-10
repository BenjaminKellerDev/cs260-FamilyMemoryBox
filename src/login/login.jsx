import React from 'react';

export function Login() {
    return (
        <main>
            <div id="loginBox">
                <h1>Welcome to your digital</h1>
                <h1> <i>Memory Box</i></h1>

                <form action="stories">
                    <div className="inputBox">
                        <label for="nameBox" className="form-label">Name:</label>
                        <input type="text" id="nameBox" name="loginName" className="shrink form-control" />
                    </div>
                    <div className="inputBox">
                        <label for="emailBox" className="form-label">Email:</label>
                        <input type="email" id="emailBox" name="loginEmail" className="shrink form-control" />
                    </div>
                    <div className="inputBox">
                        <label for="passwordBox" className="form-label">Password:</label>
                        <input type="password" id="passwordBox" name="loginPassword" className="shrink form-control" />
                    </div>
                    <div>
                        <button type="submit" className="margin10px btn btn-primary">Login</button>
                        <button type="submit" className="margin10px btn btn-secondary">Create</button>
                    </div>
                </form>
            </div>
            <div id="artBox">
                <h4>Inspirational art for your enjoyment:</h4>
                <a href=" https://www.artic.edu/artworks/20684/paris-street-rainy-day">
                    <img src="https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/1686,/0/default.jpg"
                        alt="painting" className="img"></img>
                </a>
            </div>
        </main>
    );
}