import React, { Component } from 'react';

class InputCardData extends Component {
    state = { userName: '' };
    handleSubmit = (event) => {
        //every  event in React  receives a native javascript event object 
        event.preventDefault();
         let tempUserName = this.state.userName;
        //console.log('Event:Form submit:', this.userName.value);
        //Getting data from server
        fetch(`https://api.github.com/users/${tempUserName}`)
        .then(response=>{
           // console.log(response);
            this.props.onSubmit(response);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github Username"
                    //attaching value of textbox to the ref property of react
                    //ref={(input) => this.userName = input}
                    //OR Another way below using state
                    value={this.state.userName}
                    onChange={(event)=>this.setState({userName:event.target.value})}

                />
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

export default InputCardData;