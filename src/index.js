import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
 import ToDoList from './ToDoList/ToDoList';
// import Two_WayBindingAndEvents from "./Two_WayBindingAndEvents";

import  template from './ExploringJSX'
import LifeCycleMethods from './LifeCycleEvents'

ReactDOM.render(<LifeCycleMethods data="recevied props"/>
    ,document.getElementById('root'));

