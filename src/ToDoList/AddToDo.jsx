import React, { Component } from 'react';
import uniqueId from 'uuid';


class AddToDo extends Component {
    constructor() {
        super();
    }

    addToDo = (e) => {
        e.preventDefault();
        console.log(this.refs);
        let newTodo = {
            id: uniqueId.v4(),
            todoTask: this.refs.txtTodo.value
        }
      this.props.addItem(newTodo);
      this.refs.txtTodo.value="";
    }
    render() {
        return (
            <React.Fragment>
                <form className="form-group" onSubmit={this.addToDo.bind(this)} >
                    <label >Add To Do Item:</label>
                    <input type="text" className="form-control" ref="txtTodo" />
                    <input type="submit" className="form-control btn btn-primary" value="Add To Do" />
                </form>
            </React.Fragment>
        );
    }

}

export default AddToDo;