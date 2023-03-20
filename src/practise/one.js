import React from "react";
import Add from "./importExport"

const name="bhargavi"
const year= new Date();
const currentYear=year.getFullYear();
const img ="https://picsum.photos/200"


function One(){

    return(
        <div>
        <h1>Bhargavi {Math.random()}</h1>

        <h2>my name {name}</h2>
        <h3>year is {currentYear}</h3>
        <img src={img}></img>
        <li>{Add(4,5)}</li>




        </div>



    )
}
export default One;



    
