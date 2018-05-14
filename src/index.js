import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Including components
import App from './App';
import DisplayCouter from './DynamicCounter';
import GithubApp from './GitHubCardComponent/GithubApp';


ReactDOM.render(
    <div className="Container">
        <App />
        <DisplayCouter />
        <GithubApp/>
       
    </div>,
    document.getElementById('root'));

