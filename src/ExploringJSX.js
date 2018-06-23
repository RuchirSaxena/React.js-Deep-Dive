import React from 'react';
import ReactDOM from 'react-dom';






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
    count++;
    reRender();
    console.log('add one called',count);
};

const minusOne=()=>{
    count--;
    reRender();
    console.log('minus one called');
}
const resetCount=()=>{
    count=0;
    reRender();
     console.log("reset count called");
}

// const template = (
//     <div>
//         <h1>Count:{count}</h1>
//         <input type="button" onClick={addOne} value="+1" /><br/>
//         <input type="button" onClick={minusOne} value="-1" /><br/>
//         <input type="button" onClick={resetCount} value="Reset Count" />
       
//     </div>

// );
const template1 = (
    <React.Fragment>
      
    </React.Fragment>
);

const reRender=()=>{

   
    const template = (
        <div>
            <h1>Count:{count}</h1>
            <input type="button" onClick={addOne} value="+1" /><br />
            <input type="button" onClick={minusOne} value="-1" /><br />
            <input type="button" onClick={resetCount} value="Reset Count" />

        </div>

    );
    ReactDOM.render(template
        , document.getElementById('root'));
}



export {  reRender};


