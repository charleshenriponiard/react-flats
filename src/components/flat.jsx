import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
      <div className="card" style={{backgroundImage:`url(${this.props.image})`, width: "100%"}}>
        <div className="card-category">
          <span>{this.props.price}</span><span> {this.props.currency}</span>
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>   
    )
  }
}

export default Flat;
