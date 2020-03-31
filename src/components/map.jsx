import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.841387, 
      lng: -0.579133
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB3NbgtsyMYa2Uyj4dyzbwRpyI7ZdNE158" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={44.841387}
            lng={-0.579133}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;