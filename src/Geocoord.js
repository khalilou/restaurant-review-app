import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import data from './data-json-restaurant.json';
import { L, Icon } from "leaflet";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';
// import axios from 'axios';


class Geocoord extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        lating: 48.866667,
        longing: 2.333333
    };
    }

    componentDidMount = () =>{
        // this.getPicture()
        let lat_1;
        let lon_1;
        navigator.geolocation.getCurrentPosition((position) => {
            lat_1 = position.coords.latitude;
            lon_1 = position.coords.longitude;
            this.setState({
                lating: lat_1,
                longing: lon_1
            })
          });
    }


render() {

    const userPosition = { lat: 36.72866, lng: 10.34163 };
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
                        <Map center={[this.state.lating, this.state.longing]} zoom={15} className="Mapclass" click={this.props.handleClick.bind(this)}>                          
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
                                 <Marker position={[userPosition.lat,userPosition.lng]} icon={skater}>
                
                                </Marker> 
                        </Map>
                    </Col>
                </Row>    
            </Container>        
        )}
    
    }

export default Geocoord