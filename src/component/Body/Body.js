import React,{Component} from "react"
// import ReactDom from "react-dom"
import Card from "./Card"
import "./Body.css"

class Body extends Component{

    render(props){
        return(
            <div>
                {this.props.data.map((ele , i)=>{
                    return <Card key={i} name={ele.name} work={ele.work}></Card>
                })}
            </div>
        );
    }
}

export default Body;