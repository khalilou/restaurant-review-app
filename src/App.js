import React, {useState} from 'react'
import './App.css';
import Geocoord from './Geocoord';


export default function App() {
 
  const [userNewPlaces, setUserNewPlaces] = useState([]);

  const handleClick = e => {
    console.log("test");
    setUserNewPlaces(userNewPlaces =>
      userNewPlaces.concat({
        location: e.latlng,
        name: prompt("Enter the new restaurant name!"),
        review: prompt("give a review number form 1 to 5 "),
        img: prompt("Enter restaurant image URL!"),
        id: Math.random() * 100
      })
    );
  };
console.log(userNewPlaces, "test");
  return (
   <>
    <Geocoord handleClick={handleClick} />
   </>

  );
}
