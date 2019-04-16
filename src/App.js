import React, { Component } from 'react';
import Navi from './Navi';
import ProjectCompOne from './ProjectCompOne';
import ProjectCompTwo from './ProjectCompTwo';
import ProjectCompThree from './ProjectCompThree';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  
 // constructor(props){
 //   super(props);
 //   this.state ={
  //    appearHome: true
  //  }
 // }
  
  render() {
    
    return (  
      <div className="App">
        <Navi />
        <ProjectCompOne />
        <ProjectCompTwo  />
        <ProjectCompThree />

      </div>
    );
  }
}


export default App;
