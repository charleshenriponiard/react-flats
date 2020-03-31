import React, { Component } from 'react';
import FlatsList from './flats_list';
import SimpleMap from './map';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {flat: {}};
  }

  handleFlat = (flat) => {
    console.log(flat)
    this.setState({flat: flat});
  }

  render() {
    const { flat } = this.state
    return (
      <div>
        <FlatsList handleFlat={this.handleFlat} />
        <div className="map-container">
          < SimpleMap flat={flat} />
        </div>
      </div>
    )
  }
}

export default App;
