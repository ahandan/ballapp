import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import '../../node_modules/leaflet/dist/leaflet.css'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import '../style/leaflet_ball.css'

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: marker2x,
      iconUrl: marker,
      shadowUrl: markerShadow
    });
  }



  render() {
    return (
      <div>
      <dif>Test123</dif>
        <MapContainer center={[45.5017, -73.5673]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      <dif>Test123</dif>
      </div>
    );
  }
}