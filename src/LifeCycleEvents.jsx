import React, { Component} from 'react';

class LifeCycleMethods extends Component{
    constructor(){
        super();
        console.log("Constructor Called");
        this.state={
            counter:0,
            currentMethod:""
        };
    }

    componentWillMount(){
       // console.log("componentWillMount()");
        this.setState((prevState)=>{
            return{
                counter: prevState.counter+1,
                currentMethod:"componentWillMount()"
            };
        });
    }
    componentDidMount(){
       // console.log("componentDidMount()");
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1,
                currentMethod: "componentDidMount()"
            };
        });
    }

    componentWillReceiveProps(){
        console.log("ComponentWillReceiveProps()");
        // this.setState((prevState) => {
        //     return {
        //         counter: prevState.counter + 1,
        //         currentMethod: "ComponentWillReceiveProps()"
        //     };
        // });
    }

    componentWillUpdate(){
       console.log("componentWillUpdate()");
        // this.setState((prevState) => {
        //     return {
        //         counter: prevState.counter + 1,
        //         currentMethod: "componentWillUpdate()"
        //     };
        // });
    }

    componentDidUpdate(){
        console.log("componetDidUpdate()");
        // this.setState((prevState) => {
        //     return {
        //         counter: prevState.counter + 1,
        //         currentMethod: "componetDidUpdate()"
        //     };
        // });
    }

    componentWillUnmount(){
       console.log("componentWillUnmount()");
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1,
                currentMethod: "componentWillUnmount()"
            };
        });
    }

    render(){
        console.log("render");
        return(
            <div>React Life Cycle Methods
                <p>{this.props.data}</p>
                {console.log(`Conter:${this.state.counter}=>${this.state.currentMethod}`)}
                
            </div>
        );
    }

}

export default LifeCycleMethods;


//import React, { Component } from 'react'

// export default class componentName extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
