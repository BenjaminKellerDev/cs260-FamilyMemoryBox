import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Drafting } from './drafting/drafting';
import { Stories } from './stories/stories';
import { Tags } from './tags/tags';

export default function App() {
    return <div className="body">
        <header>
            <nav>
                <NavLink to="/stories.html" className="headerLink"><span className="ultraCompactHidable">Story </span>Feed</NavLink >
                <NavLink to="/tags.html" className="headerLink"><span className="ultraCompactHidable">Manage
                </span>Tags</NavLink >
                <NavLink to="/index.html" className="headerLink">Logout</NavLink >
            </nav>
            <div id="usernameHeader">
                <span id="usernameText">Logged in as:</span> <span id="usernameTag">username</span>
            </div>
        </header>

        <main>component here</main>


        <footer>
            <p>by Benjamin Keller</p>
            <a href=" https://github.com/BenjaminKellerDev/cs260-FamilyMemoryBox">Source</a>
        </footer>

    </div>;
}