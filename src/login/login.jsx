import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login({ setCurrentUser }) {
    const navigate = useNavigate();
    const [errorMSG, setErrorMSG] = React.useState('');

    function loginUser(e) {
        e.preventDefault();
        if (checkUser()) {
            localStorage.setItem('currentUser', nameText);
            setCurrentUser(nameText);
            navigate('/stories');
        }
        else {
            setErrorMSG('invalid credentials');
        }
    }

    function createUser(e) {
        e.preventDefault();

        //add to localStorage
        var userArrayString = localStorage.getItem('userList') || '{"users":[]}';
        var userArray = JSON.parse(userArrayString);
        userArray.users.push({ nameText, passwordText });
        localStorage.setItem('userList', JSON.stringify(userArray));

        loginUser(e);
    }

    function checkUser() {
        var userArray = JSON.parse(localStorage.getItem('userList') || '{"users":[]}');
        return userArray.users.some((element) => element.nameText == nameText && element.passwordText == passwordText);
    }

    const [nameText, setNameText] = React.useState('');
    function nameTextChange(e) {
        setNameText(e.target.value);
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
                        <label htmlFor="passwordBox" className="form-label">Password:</label>
                        <input type="password" id="passwordBox" name="loginPassword" className="shrink text-form-control form-control" onChange={passwordTextChange} />
                    </div>
                    <div>
                        <button type="submit" className="margin10px btn btn-primary" onClick={loginUser}>Login</button>
                        <button type="submit" className="margin10px btn btn-secondary" onClick={createUser}>Create</button>
                    </div>
                    <div className='errorMSG'> {errorMSG}</div>
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