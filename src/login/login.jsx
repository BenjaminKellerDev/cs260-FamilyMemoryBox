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

    async function createUser(e) {
        e.preventDefault();

        if (passwordText.length === 0) {
            setErrorMSG('no password set');
        }
        else {
            const response = await fetch('/api/auth/create', {
                method: 'post',
                body: JSON.stringify({ nameText: nameText, passwordText: passwordText }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            if (response?.status === 200) {
                loginUser(e);
            } else {
                setErrorMSG(response.body.msg);
            }
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
                        <button type="submit" className="margin10px btn btn-primary" onClick={() => loginUser()}>Login</button>
                        <button type="submit" className="margin10px btn btn-secondary" onClick={() => createUser()}>Create</button>
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