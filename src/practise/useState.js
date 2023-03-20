import React, { useState } from "react";



function Hooks(){
    const [count, setCount]= useState(0)
    function inc(){
        setCount(count + 1);
        
    }
    
    function dec(){
        setCount(count - 1);
    }
    return(

    <div>
    <b>{count}</b>
    <button onClick={inc}>add</button>
    <button onClick={dec}>sub</button>
    </div>
    )
    
}
export default  Hooks ;