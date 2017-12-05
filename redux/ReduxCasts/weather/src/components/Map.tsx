import * as React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

interface Props {
  lat: number;
  lon: number;
}

const Map = withScriptjs(withGoogleMap((props: Props) => (
  <GoogleMap
    defaultZoom={12}
    center={{lat: props.lat, lng: props.lon}}
  >
    <Marker position={{lat: props.lat, lng: props.lon}}/>
  </GoogleMap>
)));

export default Map;