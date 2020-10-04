import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import data from './data-json-restaurant.json';
import { Icon } from "leaflet";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';


class Geocoord extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        lating: 48.866667,
        longing: 2.333333
    };
    }

    componentDidMount = () =>{
        let lat_1;
        let lon_1;
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            lat_1 = position.coords.latitude;
            lon_1 = position.coords.longitude;
          });
          this.setState({
            lating: this.lat_1,
            longing: this.lon_1
        })
    }

    


render() {

    const userPosition = { lat: 48.866667, lng: 2.333333 };

    // const userPosition = { lat: position.coords.latitude, lng: position.coords.longitude };

      
    const skater = new Icon({
        iconUrl: 'https://img.icons8.com/dusk/64/000000/marker.png',
        iconSize: [50, 50]
      });
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <Cards />
                    </Col>
                    <Col md={8}>
                        <Map center={[this.state.lating, this.state.longing]} zoom={12} className="Mapclass">                          
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {data.map(park => (
                                <Marker
                                    position={[
                                        park.lat,
                                        park.long
                                    ]}>
                                    <Popup>
                                        <span>{park.restaurantName}</span>
                                    </Popup>
                                </Marker>
                            ))}
                                {/* <Marker position={[userPosition.lat,userPosition.lng]} icon={skater}>
                
                                </Marker> */}
                        </Map>
                    </Col>
                </Row>    
            </Container>        
        )}
    
    }

export default Geocoord