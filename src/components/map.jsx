import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.854970, 
      lng: 2.346288
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "API-KEY-GOOGLE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={ this.props.flat.lat }
            lng={ this.props.flat.lng }
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;