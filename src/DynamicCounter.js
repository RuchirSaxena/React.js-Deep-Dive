import React, { Component } from 'react';


class DynamicCounter extends Component{
    state={counter :0} ;
    increaseCounter =()=>{
        this.setState((prevState)=>({
            counter: prevState.counter + 1
        }));
        //can be written as 
        // this.setState(function (prevState) {
        //     return { counter: prevState.counter + 1 }
        // });
    }
    render() {
        return(
            <div>
                Hello this is a Dynamic Component.
                <button onClick={this.increaseCounter}>{this.state.counter}</button>
            </div>
            
        );
    }
}

const Result=(props)=>{
    return (
        <div>test</div>
    );
}

class DisplayCouter extends Component{
    render(){
        return(
            <div>
                <DynamicCounter />
                <Result />
            </div>
        )
    }
}
export default DisplayCouter;