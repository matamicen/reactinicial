import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {nombre: '',
                  apellido: '',
                  sexo: '',
                  club: '',
                  url:'' };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
   // console.log(event.target.value + event.target.name);
  }

  handleSubmit(event) {
    if (this.state.club==='boca')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/5.png'});
    if (this.state.club==='river')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/16.png'});
    if (this.state.club==='racing')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/15.png'});
    event.preventDefault();
  }

  render() {
    //console.log(this.state.value);
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" value={this.state.apellido} onChange={this.handleChange} />
        </label>
        <label>
          Sexo:
          <input type="text" name="sexo" value={this.state.sexo} onChange={this.handleChange} />
        </label>
        <label>
          Club:
          <input type="text" name="club" value={this.state.club} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

       <h1>Club: {this.state.club}</h1>

       <img src ={this.state.url} />
       </div>
    );
  }
}

export default App;
