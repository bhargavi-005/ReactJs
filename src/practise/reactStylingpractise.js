import React from "react";

const time =new Date();
const currentTime=time.getHours();



let wish;
const color={
    color:" ",
}
if (currentTime<12){
    wish="good morning"
    color.color="red"
}
else if(currentTime<18) {
    wish="good Afternoon"
    color.color="green"
    
} else {
    wish="good night"
    color.color="blue"
}

function Style(){
    return(
        <div><h1 style={color}>hello {wish}</h1></div>

    )
   
}
export default Style;