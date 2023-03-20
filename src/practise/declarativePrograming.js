import React from "react";

var clicked= true;

const color ={color:"red"}

function Click(){
    return(
        <p style={clicked ? color : null}>Click</p>
    )
}
export default Click;