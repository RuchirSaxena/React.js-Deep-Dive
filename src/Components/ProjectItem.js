import React, { Component } from 'react';
import PropTypes from "prop-types";

class ProjectItem extends Component {
    constructor(){
        super();
    }
    deleteProject(id) {
        this.props.onDelete(id);
    }
    render() {
       
        return (
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-info">
                        <strong> {this.props.item.title} =></strong> {this.props.item.category} <span style={{ cursor: 'pointer' }}><i className="fa fa-trash pull-right" onClick={this.deleteProject.bind(this,this.props.item.id)}></i></span>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}
ProjectItem.propTypes={
    item:PropTypes.object,
    deleteProject:PropTypes.func
}

export default ProjectItem;