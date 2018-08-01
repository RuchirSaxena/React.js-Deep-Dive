import React from 'react';







let user = {
    userName: "Ruchir Saxena",
    age: 30,
    location: "India"
}
function getLocation() {
    if (user.location) {
        return <p>Location: {user.location}</p>;
    }
}
const template2 = (
    <React.Fragment>
        <h1>
            {user.userName ? user.userName.toUpperCase() : "Anonymous"}
        </h1>
        {
            (user.age && user.age >= 18) &&
            <p>
                Age :{user.age}
            </p>
        }
        {getLocation()}
    </React.Fragment>
);

let count = 0;
const addOne = () => {
    console.log('add one called');
};

const minusOne=()=>{
   
    console.log('minus one called');
}
const resetCount=()=>{
     console.log("reset count called");
}
const template = (
    <div>
        <h1>Count:{count}</h1>
        <input type="button" onClick={addOne} value="+1" /><br/>
        <input type="button" onClick={minusOne} value="-1" /><br/>
        <input type="button" onClick={resetCount} value="Reset Count" />
       
    </div>

);
const template1 = (
    <React.Fragment>
        {console.log(template)}
    </React.Fragment>
);
export default template;


