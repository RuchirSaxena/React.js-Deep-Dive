import React, { Component } from 'react';


class Two_WayBindingAndEvents extends Component{
    constructor(){
        super();
        this.state={
            someVal:"Hello From React"
        }
    }

    updateData=(newValue)=>{
      
       let updatedValue="";
        if (typeof newValue==='string'){
           updatedValue=newValue;
       }else{
           //getting the value of textbox 
           updatedValue = newValue.target.value;
       }
    
        this.setState({
            someVal: updatedValue
        });
    }
    render(){
        return(
            <div className="container">
                <br/>
                <input type="button" className="btn btn-success" onClick={this.updateData.bind(this,"Start journey for React1")} value="Update Data Way1"/>
                <span>======</span>
                <input type="button" onClick={() => this.updateData("Start journey for React2")} value="UpdateData Way2" className="btn btn-primary" /><br /> <br /> 
                <input type="text" className="form-control" onChange={this.updateData} value={this.state.someVal}/>
                <div className="bg-info">{this.state.someVal}</div>
            </div>
        );
    }

}

export default Two_WayBindingAndEvents;
