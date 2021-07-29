import React from 'react';
import './App.css'
import Button from 'react-bootstrap/Button'


export default class App extends React.Component {
  constructor(prop){
    super(prop);  
    this.state = {
      count : 0,
      oprend : 0,
    }
}
    
  add = () =>{
   this.setState({count:parseInt(this.state.count)+parseInt(this.state.oprend)})
   this.setState({oprend : ""})
  }
  sub = () =>{
    this.setState({count:(this.state.count-this.state.oprend)})
    this.setState({oprend : ""})
  }

  multi = () =>{
    this.setState({count:(this.state.count*this.state.oprend)})
    this.setState({oprend : ""})               
  }
  div = () =>{
    this.setState({count:(this.state.count/this.state.oprend)})
    this.setState({oprend : ""})
  }
  render(){
    return(
      <div className="App">
        <div className="container">
          <h6>Small Calculator</h6>
          <h1> {this.state.count} </h1>
          <input type="text" placeholder="Enter...." value={this.state.oprend} onChange={(e)=>{this.setState({oprend:e.target.value})}}  />
          <Button id="sub" type="submit" variant="success" onClick={this.sub}>Substraction</Button>
          <Button id="add" type="submit" variant="primary" onClick={this.add}>Addition</Button>
          <Button id="multi" type="submit" variant="info" onClick={this.multi}>Multiplication</Button>
          <Button id="div" type="submit" variant="secondary" onClick={this.div}>Division</Button>

        </div>
      </div>
    )
  }
}
