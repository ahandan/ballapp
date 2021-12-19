import React, { Component, useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";
import marker from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import '../style/leaflet_ball.css'
import basket_terrains from '../data/basket_terrains.json'
import Basket1 from '../logo/Basket1.svg'
import user from '../logo/user_map_dot.svg'
// import ReactLeafletSearch from "react-leaflet-search";


function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}


export default class LeafletMap extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      user_position :[45.48017, -73.6672],
      // where: { lat: 45.48017, lng: -73.6672 },
      zoom : 13
    };
    


    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: Basket1,
      iconUrl: marker,
      shadowUrl: markerShadow,
      // iconSize:'auto'
      // iconSize: [18, 18],
      // iconAnchor: [20, 20]
    });


    this.get_terrain_basket = this.get_terrain_basket.bind(this)
    this.get_terrain_basket()
    
  }


  componentDidUpdate(){

  }
  componentDidMount(){
    this.set_map_position_to_user()
  }

  set_map_position_to_user(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
         user_position :[position.coords.latitude, position.coords.longitude],
         zoom :10
        }, () => {
            console.log(this.state.map_position)
            console.log("User Latitude is :", this.state.user_position[0]);
            console.log("User Longitude is :", this.state.user_position[1]);
          }
      )
    );
  }
  
  get_terrain_basket(){
    // console.log(basket_terrains)
    basket_terrains.forEach(function(court,index){
      // console.log(court.properties.ARROND)
    })
  }

  
  render() {

    const position = this.state.user_position;
    var userIcon = L.icon({
      iconUrl: user,
      shadowUrl: markerShadow,
  
      // iconSize:     [25, 25], // size of the icon
      // shadowSize:   [25, 25], // size of the shadow
      iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
    return (
      <div>
        <div>
          <button onClick={() => this.set_map_position_to_user()}
          >Go</button>
        </div>
        <MapContainer 
          center={position} 
          zoom={this.state.zoom} 
          scrollWheelZoom={true}>
          <ChangeMapView coords={position}/>

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
          <Marker 
            name="UserMarker"
            position={position}
            icon={userIcon}>
            <Popup>
              Hi im the user 
              Level : 3 * *
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  
}
  