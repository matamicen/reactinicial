import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Myform from './components/Myform';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class App extends Component {

  
  constructor(props) {
    super(props);
   
  }

   


  render() {
    //console.log(this.state.value);
    return (
      <div>
  
       <Myform />
      
       </div>
    );
  }
}

export default App;
