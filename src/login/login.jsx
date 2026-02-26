import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { getImageFromAPI } from '../imageAPI'

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

        if (passwordText.length === 0) {
            setErrorMSG('no password set');
        }
        else if (!userArray.users.some((element) => element.nameText == nameText)) {
            userArray.users.push({ nameText, passwordText });
            localStorage.setItem('userList', JSON.stringify(userArray));

            loginUser(e);
        }
        else {
            setErrorMSG('name already exists');
        }
    }

    function checkUser() {
        var userArray = JSON.parse(localStorage.getItem('userList') || '{"users":[]}');
        if (nameText.length === 0 || passwordText.length === 0)
            return false;
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

    const [imageOBJ, setImage] = React.useState(null);
    React.useEffect(() => {
        //getImageFromAPI().then(setImage);
        setImage(getImageFromAPI());
    }, [])

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
                {imageOBJ && < a href={imageOBJ.info}>
                    <img src={imageOBJ.img}
                        alt={imageOBJ.imageName} className="img"></img>
                </a>}
            </div>
        </main >
    );
}