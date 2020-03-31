import React, { Component } from 'react';
import Flat from './flat';
import Flats from './../data/flats.js';

class FlatsList extends Component {


  render() {
    return (
        <div className="flat-list">
          { Flats.map((flat) => {
            return <Flat name={ flat.name } price={ flat.price } currency={ flat.priceCurrency } image={ flat.imageUrl } key={`flat_${flat.price}`}/>
          })}
        </div>
      
    );
  }



}

export default FlatsList;

