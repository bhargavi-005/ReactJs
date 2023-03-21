import React, { useState } from "react";

function Event(){

    const [isMouseover, setMouseOver]=useState(false);
    function handleMouseOver(){
        setMouseOver (true);
    }
    function handleMouseOut(){
        setMouseOver (false);
    }

    return(

<div>
    <p>hello</p>
    <button style={{backgroundColor: isMouseover?"black": "white" ,color:isMouseover?"white": "black"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >addf</button>
    </div>
    )
}
export default Event;