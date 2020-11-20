import React, {useState} from 'react'
import './App.css';
import Geocoord from './Geocoord';
import Cards from './Cards';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function App() {
 
  const [data, setData] = useState([]);
  let latitude = 0;
  let longitude = 0;

  const updateGeocord = (lat,lng) => {
     latitude = lat;
     longitude = lng;
     getRestaurant()
  }

// Get some data from GOOGLE PLACES API
  const getRestaurant = () => { 
    const fetchData = async () => {
      const result = await axios(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDayb3-2k0UBQiaVXDz1N_aot-nIw8BfIg&location=${latitude},${longitude}&radius=400&type=restaurant`
      ); 
      setData(result.data.results)
    };
    fetchData();
  }



  const handleClick = e => {
    let newRest = {
        geometry: {location: {lat: e.latlng.lat, lng: e.latlng.lng }},
        name: prompt("Enter the new restaurant name!"),
        rating: parseInt(prompt("give a review number form 1 to 5 ")),
        id: Math.random() * 100
    };
    setData((state => [newRest, ...state]));
  };
  return (
   <>
   <Container>
      <Row>
        <Col md={8}>
          <Geocoord handleClick={handleClick} updateGeocord={updateGeocord} restaurants={data} />
        </Col>
        <Col md={4}>
          <Cards restaurants={data} />
        </Col>
      </Row>
    </Container>  
   </>
  );
}
