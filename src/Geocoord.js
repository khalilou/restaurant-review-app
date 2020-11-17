import React from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

class Geocoord extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        lating: 48.866667,
        longing: 2.333333
    };
    }

    componentDidMount = () => {
        let lat_1;
        let lon_1;
        navigator.geolocation.getCurrentPosition((position) => {
            lat_1 = position.coords.latitude;
            lon_1 = position.coords.longitude;
            this.props.updateGeocord(lat_1,lon_1)
            this.setState({
                lating: lat_1,
                longing: lon_1,
                restaurants: this.props.restaurants
            })
          });
    }

    static getDerivedStateFromProps(props, state) {
        // À chaque fois que l’utilisateur actuel change, on réinitialise
        // tous les aspects de l’état qui sont liés à cet utilisateur.
        console.log(props.restaurants);
        if (props.restaurants !== state.restaurants) {
          return {
            restaurants: props.restaurants,
          };
        }
        return null;
      }

render() {
    const userPosition = { lat: 36.72866, lng: 10.34163 };
    const skater = new Icon({
        iconUrl: 'https://img.icons8.com/dusk/64/000000/marker.png',
        iconSize: [50, 50]
      });
      console.log(this.state.restaurants);
        return (
            <Map center={[this.state.lating, this.state.longing]} zoom={15} className="Mapclass" ondblclick={this.props.handleClick}>                          
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.state.restaurants.map((rest,index) => (
                    <Marker key={index}
                        position={[
                            rest.geometry.location.lat,
                            rest.geometry.location.lng
                        ]}>
                        <Popup>
                            <span>{rest.name}</span>
                        </Popup>
                    </Marker>
                ))}
                
                {/* {this.props.userPlaces === [] ? null :  this.props.userPlaces.map((place) => (
                    <Marker key={place.id}
                        position={[
                            place.location.lat,
                            place.location.lng
                        ]}>
                        <Popup>
                            <span>{place.name}</span>
                        </Popup>
                    </Marker>
                ))} */}
                        <Marker position={[userPosition.lat,userPosition.lng]} icon={skater}>
    
                    </Marker> 
            </Map>   
        )}
    
    }

export default Geocoord