import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Including components
import App from './App';
import DisplayCouter from './DynamicCounter';


//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div>
        <App />
        <DisplayCouter />
    </div>,
    document.getElementById('root'));
//registerServiceWorker();
