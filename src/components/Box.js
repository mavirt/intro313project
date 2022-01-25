import React from "react";

function Box(props) {
    const [age, setAge] = React.useState(props.yearsOld);


    return (
        <div>
            <p>Name: {props.name}</p>
            <p>The coolest color is {props.color}</p>
            <p onClick ={()=>setAge(age+1)}> I am {age} years old</p>
        </div>

        )
}


export default Box;


