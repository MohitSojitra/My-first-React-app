import React from "react";
import "./header.css"
import Body,{addItem} from "../Body/Body"

function Header(props){
    return (
        <div className="Header">
            <label>Name: </label>
            <input type="text" placeholder="Please enter a Name." id="name"></input><br></br>
            <label>Work: </label>
            <input type="text" placeholder="What kind of work you do?." id="work"></input><br></br>
            <button onClick={props.addItem}>Add Person</button>
            
        </div>
    );
}

export default Header;