import React, { Component } from 'react';
import UniqueId from "uuid";
import PropTypes from 'prop-types'

class AddProject extends Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        };
    }
    static defaultProps = {
        categories: ['Web Development', 'Web Design', 'Mobile Development']
    }
    handelSubmit(e) {
        e.preventDefault();
        if (this.refs.title.value){
            let addedProject = {
                        id: UniqueId.v4(),
                        title: this.refs.title.value,
                        category: this.refs.category.value
                    };
            // console.log(this.refs.title.value);
            // console.log(this.refs.category.value);
            // this.setState(
            //     {
            //         newProject:{
            //             title: this.refs.title.value,
            //             category: this.refs.category.value
            //         }
            //     },function () {
            //         this.props.addProject(this.state.newProject,"args2");
            //     }
            // );
            this.props.addProject(addedProject);

        }else{
            alert("Add Title");
        }
       
       
    }
    render() {
        let categoryOptions = this.props.categories.map((category, i) => {
            return (
                <option key={category} value={category}>{category}</option>
            );
        });
       

        return (
            <React.Fragment>
                <h3>Add Project</h3>
                <form  onSubmit={this.handelSubmit.bind(this)}>
                    <div className="form-group">
                        <label><strong>Title:</strong></label>
                        <input className="form-control" ref="title" type="text" name="" id=""/><br/>
                        <label><strong>Category:</strong></label>
                        <select className="form-control" ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Project"/>
                </form>
            </React.Fragment>
        );
    }
}

    AddProject.propType={
        categories:PropTypes.array,
        handelSubmit:PropTypes.func,
        

    };

export default AddProject;
