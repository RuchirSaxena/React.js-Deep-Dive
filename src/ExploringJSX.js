import React from 'react';


const template1 = (
    <React.Fragment>
        <div>Hello from JSX</div>
    </React.Fragment>
);

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
const template = (
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

export default template;


