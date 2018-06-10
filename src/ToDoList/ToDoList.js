import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';

class ToDoList extends Component {
    constructor(){
        super();
        this.state={
            toDoList:[
                {
                    id:1,
                    todoTask:"Learn React"
                },
                {
                    id:2,
                    todoTask:"Learn Node JS"
                }
            ]
        }
    }
    addNewItemToList= (todoItem)=>{
        debugger;
        console.log(todoItem);
        let toDoItemList= this.state.toDoList;
        toDoItemList.push(todoItem);
        this.reSetState(toDoItemList);

    }
    deleteItemToDoList=(todoItemId)=>{
        let todoItems=this.state.toDoList;
        let index = todoItems.findIndex(item => item.id === todoItemId);
        todoItems.splice(index,1);
        this.reSetState(todoItems);
    }
    
    //modifying state , so the re-redering happens automatiacally
    reSetState = (toDoItemList)=>{
        this.setState({
            toDoList: toDoItemList
        });
    }

    render() {
     
        let toDoData=this.state.toDoList.map(todo=>{
            return <ToDoItem key={todo.id} id={todo.id} deleteItem={this.deleteItemToDoList.bind(this)} todoItem={todo.todoTask} />
        });
        return(
            <React.Fragment>
                <div className="container">
                  <h3>To Do App</h3>
                    <AddToDo addItem={this.addNewItemToList.bind(this)}  />
                    <ul className="list-group">
                        {toDoData}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default ToDoList;