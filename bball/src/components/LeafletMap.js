import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import '../style/leaflet_ball.css'
import basket_terrains from '../data/basket_terrains.json'
import Basket1 from '../logo/Basket1.svg'


export default class LeafletMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      init_position :[45.5017, -73.5673],
      init_zoom : 13

    };
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: Basket1,
      iconUrl: marker,
      shadowUrl: markerShadow
    });

    this.get_terrain_basket = this.get_terrain_basket.bind(this)
    this.get_terrain_basket()
  }


  get_terrain_basket(){
    console.log(basket_terrains)

    basket_terrains.forEach(function(court,index){
      console.log(court.properties.ARROND)
    })
  }


  render() {


    return (
      <div>
        <MapContainer center={this.state.init_position} zoom={this.state.init_zoom} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {basket_terrains.map((court, index) => (
            <Marker 
              key = {index}
              position={court.geometry.coordinates.reverse()}
            >
              <Popup>
                {court.properties.ARROND}
              </Popup>
            </Marker>
          ))}


          <Marker position={[45.5017, -73.5673]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}