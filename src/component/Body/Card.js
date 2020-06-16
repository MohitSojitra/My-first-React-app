import React,{Component} from "react"
// import ReactDom from "react-dom"


function Card(props){
    return(
        <div className="card">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} width="300" height="300"></img>
            <h1>{props.name}</h1>
            <p> {props.work}</p>
        </div>
    );
}

export default Card;