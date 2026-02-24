import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './login/login';
import { Drafting } from './drafting/drafting';
import { Stories } from './stories/stories';
import { Tags } from './tags/tags';

export default function App() {
    const [currentUser, setCurrentUser] = React.useState(localStorage.getItem('currentUser') || null);
    const navigate = useNavigate();

    function logoutUser() {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        navigate('/');
    }
    return <BrowserRouter>
        <div className="body">
            {currentUser &&
                <header>
                    <nav>
                        <NavLink to="/stories" className="headerLink"><span className="ultraCompactHidable">Story </span>Feed</NavLink>
                        <NavLink to="/tags" className="headerLink"><span className="ultraCompactHidable">Manage
                        </span>Tags</NavLink>
                        <NavLink to="/" className="headerLink" onClick={logoutUser}>Logout</NavLink>
                    </nav>
                    <div id="usernameHeader">
                        <span id="usernameText">Logged in as:</span> <span id="usernameTag">{currentUser}</span>
                    </div>
                </header>
            }
            <Routes>
                <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} exact />
                <Route path='/drafting' element={<Drafting />} />
                <Route path='/stories' element={<Stories />} />
                <Route path='/tags' element={<Tags />} />
                <Route path='*' element={<NotFound />} />
            </Routes>


            <footer>
                <p>by Benjamin Keller</p>
                <a href=" https://github.com/BenjaminKellerDev/cs260-FamilyMemoryBox">Source</a>
            </footer>

        </div>
    </BrowserRouter >;
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}