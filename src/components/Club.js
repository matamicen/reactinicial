import React, { Component } from 'react';


class Club extends Component {

  
  constructor(props) {
    super(props);
    
      }

   
  render() {
    //console.log(this.state.value);
    return (
      <div>
   
       <h1>Club2: {this.props.club}</h1>

       <img src ={this.props.url} />
       </div>
    );
  }
}

export default Club;