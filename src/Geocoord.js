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
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            lat_1 = position.coords.latitude;
            lon_1 = position.coords.longitude;
            this.setState({
                lating: lat_1,
                longing: lon_1
            })
          });
    }
    // getPicture = () => {
    //     const endPoint = "https://api.foursquare.com/v2/photos/111XXXYY222"
    //     const param = {
    //         client_id: "AGCPW4HPMTYS20VIEI1QLWJHBRDVTXXBCZOQHKCCVFJEDUCX",
    //         client_secret: "U4PFGRFZXW42B41A12YJPDGG4EVV4INX53LXS5KTKM2UQNGO",
    //     }
    //     axios.get(endPoint + new URLSearchParams(param))
    //     .then(response => {
    //         console.log(response);
    //     })
    // }

render() {

    const userPosition = { lat: 36.72866, lng: 10.34163 };
    console.log(this.state.lating);
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
                        <Map center={[this.state.lating, this.state.longing]} zoom={15} className="Mapclass">                          
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