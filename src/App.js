import React, { Component } from 'react';
import UniqueId from "uuid";
import './App.css';
//Including components
import DisplayCouter from './DynamicCounter';
import GithubApp from './GitHubCardComponent/GithubApp';
import Projects from "./Components/Projects";
import AddProject from './Components/AddProject';



class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: UniqueId.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: UniqueId.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: UniqueId.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }
  handelAddProject(project, testargs) {
    console.log(project, testargs);
    let projectData = this.state.projects;
    projectData.push(project);
    this.setState({
      projects: projectData
    });
  }

  onDelete(id) {
    console.log("from App:" + id);
    let projectData = this.state.projects;
    debugger;
    let itemToDeleteIndex = projectData.findIndex(item=>item.id ===id);
    projectData.splice(itemToDeleteIndex,1);
    this.setState({
      projects: projectData
    });
  }
  render() {
    return (
      <div className="container">
        <AddProject addProject={this.handelAddProject.bind(this)} /><br />
        <Projects onDelete={this.onDelete.bind(this)} projects={this.state.projects} />


        {/*
         <DisplayCouter />
        <GithubApp />
         */}

      </div>
    );
  }
}


export default App;
