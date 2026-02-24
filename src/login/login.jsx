import React from 'react';

export function Login({ setCurrentUser }) {

    function loginUser() {
        localStorage.setItem('currentUser', nameText);
        setCurrentUser(nameText);
    }

    function createUser() {
        var userArrayString = localStorage.getItem('userList') || '{"users":[]}';
        var userArray = JSON.parse(userArrayString);
        userArray.users.push({ nameText, emailText, passwordText });
        localStorage.setItem('userList', JSON.stringify(userArray));
    }

    const [nameText, setNameText] = React.useState('');
    function nameTextChange(e) {
        setNameText(e.target.value);
    }

    const [emailText, setEmailText] = React.useState('');
    function emailTextChange(e) {
        setEmailText(e.target.value);
    }

    const [passwordText, setPasswordText] = React.useState('');
    function passwordTextChange(e) {
        setPasswordText(e.target.value);
    }
    return (
        <main>
            <div id="loginBox">
                <h1>Welcome to your digital</h1>
                <h1> <i>Memory Box</i></h1>
                <form action="stories">
                    <div className="inputBox">
                        <label htmlFor="nameBox" className="form-label" >Name:</label>
                        <input type="text" id="nameBox" name="loginName" className="shrink text-form-control form-control" onChange={nameTextChange} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="emailBox" className="form-label">Email:</label>
                        <input type="email" id="emailBox" name="loginEmail" className="shrink text-form-control form-control" onChange={emailTextChange} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="passwordBox" className="form-label">Password:</label>
                        <input type="password" id="passwordBox" name="loginPassword" className="shrink text-form-control form-control" onChange={passwordTextChange} />
                    </div>
                    <div>
                        <button type="submit" className="margin10px btn btn-primary" onClick={loginUser}>Login</button>
                        <button type="submit" className="margin10px btn btn-secondary" onClick={createUser}>Create</button>
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