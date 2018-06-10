import React from 'react';


const ToDoItem = (props) => {
    const deleteItem = (event) => {
        props.deleteItem(props.id);
    }
    return (

        <li key={props.id} className="list-group-item">{props.todoItem}
            <span style={{ cursor: 'pointer' }}>
                <i className="fa fa-trash pull-right" onClick={deleteItem} ></i>
            </span>
        </li>
    );
}


export default ToDoItem;