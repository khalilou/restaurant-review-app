import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import data from './data-json-restaurant.json';
import { Icon } from "leaflet";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';
import { geolocated } from "react-geolocated";


class Geocoord extends React.Component {
render() {

    const userPosition = { lat: 48.866667, lng: 2.333333 };

    // const userPosition = { lat: position.coords.latitude, lng: position.coords.longitude };

      
    const skater = new Icon({
        iconUrl: 'https://img.icons8.com/dusk/64/000000/marker.png',
        iconSize: [50, 50]
      });
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? ( (
            <Container>
                <Row>
                    <Col md={4}>
                        <Cards />
                    </Col>
                    <Col md={8}>
                        <Map center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={12} className="Mapclass">                          
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />     ) : (
                                <div>Getting the location data&hellip; </div>
                            );
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
        )      
        
                                );                       }
    }

export default Geocoord