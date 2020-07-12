import React,{ Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

state = {
  person : [
    {name : "kartik s." , age : 20},
    {name : "aishwary s." , age : 14},
  ]
}

SwitchNameHandler = () => {
  this.setState({
    person : [
      {name : "kartik" , age : 19},
      {name : "aishwary" , age : 15},
    ]
  })
}


  render() {
    return (
      <div className="App">
        <h1>Hi,kartik this side!!!!</h1>
        <h3>Hope u guys are doing good..</h3>
        <button onClick={this.SwitchNameHandler}>switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} position="CTO">i like coding.</Person>
        <Person name={this.state.person[1]["name"]} age={this.state.person[1]["age"]} position="CEO">i like video games.</Person>
      </div>
    );
  }  
}

export default App;
