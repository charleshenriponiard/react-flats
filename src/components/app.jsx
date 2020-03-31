import React, { Component } from 'react';
import FlatsList from './flats_list';
import SimpleMap from './map';

class App extends Component {
  render() {
    return (
      <div>
        <FlatsList />
        <div className="map-container">
          < SimpleMap />
        </div>
      </div>
    )
  }
}

export default App;
