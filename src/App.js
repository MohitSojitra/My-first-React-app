import React,{Component} from 'react';
import "./App.css"
import Header from "./component/Header/Header"
import Body from "./component/Body/Body"
class App extends Component {
  constructor(){
    super()
    this.state = 
    {
      data : []
  }
}
 
  addItem = ()=>{
  this.state.data.unshift(...[{id : this.state.length + 1 , name : document.getElementById("name").value , work: document.getElementById("work").value}])
  this.setState(this.state.data = this.state.data)

  document.getElementById("name").value  = ""
  document.getElementById("work").value  = ""
}

  render() {
    return (
      <div className="App">
        <h1 className="title">Hello World!! I am comming!</h1>
        <Header className="header" addItem={this.addItem}/>
        <Body data={this.state.data}></Body>
      </div>
    );
    }
}

export default App;
