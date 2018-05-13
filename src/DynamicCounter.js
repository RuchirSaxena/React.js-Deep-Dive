import React, { Component } from 'react';
import './App.css';


class DynamicCounter extends Component{
   handleClick=()=>{
       this.props.onClickFunction(this.props.incrementValue);
   }
    render() {
        return(
            <div>
                <p>Hello this is a Dynamic Component.</p>
                
                {/* <button onClick={()=>{this.props.onClickFunction(this.props.incrementValue)}}>                       +   {this.props.incrementValue} 
                </button>
                 */}

                 {/* OR below way */}
                
                <button onClick={this.handleClick}>                       +   {this.props.incrementValue}
                </button>
            </div>
            
        );
    }
}

const Result=(props)=>{
    return (
        <div>{props.counter}</div>
    );
}

class DisplayCouter extends Component{
    state = { counter: 0 };
    increaseCounter = (value) => {
        this.setState((prevState) => ({
            counter: prevState.counter + value
        }));
    }
    render(){
        return(
            <div className="Container">
                <DynamicCounter incrementValue={1} onClickFunction={this.increaseCounter}/>
                <DynamicCounter incrementValue={5} onClickFunction={this.increaseCounter} />
                <DynamicCounter incrementValue={10} onClickFunction={this.increaseCounter} />

                <br/>
                <Result counter={this.state.counter} />
            </div>
        )
    }
}
export default DisplayCouter;