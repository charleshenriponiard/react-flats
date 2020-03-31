import React, { Component } from 'react';
import Flat from './flat';
import Flats from './../data/flats.js';

class FlatsList extends Component {

  handleFlat = flat => {
    this.props.handleFlat(flat)
  }


  render() {
    return (
        <div className="flat-list">
          { Flats.map((flat) => {
            return (
            <Flat 
              name={ flat.name } 
              price={ flat.price } 
              currency={ flat.priceCurrency } 
              image={ flat.imageUrl }
              lng={ flat.lng }
              lat= { flat.lat }
              key={`flat_${flat.price}`}
              displayFlat= { this.handleFlat}
            />);
          })}
        </div>
      
    );
  }



}

export default FlatsList;

