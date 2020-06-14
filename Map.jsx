import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
//import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 33.04746858742063,
         lng: -117.2962181088272
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPBPsbtwIz7z4JULx9XIn5Mh7BJVCQObU'
})(MapContainer);