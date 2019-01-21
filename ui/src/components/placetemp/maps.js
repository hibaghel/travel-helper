import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.775573,
      lng: 76.986074
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB7_XIc5BLyyBG_MzSWpoDBKxk368c22_Y'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={31.775573}
            lng={76.986074}
            text={'IIT Mandi'}
          />
          <AnyReactComponent
            lat={31.957375}
            lng={77.108411}
            text={'Kullu'}
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;