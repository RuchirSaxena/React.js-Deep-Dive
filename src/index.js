import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Including components
import App from './App';
import DisplayCouter from './DynamicCounter';
import CardList from './GitHubCardComponent/GithubCard';
import data from './GitHubCardComponent/cardData';



//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div className="Container">
        <App />
        <DisplayCouter />
        <CardList cards={data} />
    </div>,
    document.getElementById('root'));
//registerServiceWorker();
