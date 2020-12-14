import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function GetReview(props) {
    const place_id = props.idRef;
    const [reviews, setReview] = useState([]);
    useEffect(() => {
      axios
        .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyDayb3-2k0UBQiaVXDz1N_aot-nIw8BfIg`)
        .then(res => {
            setReview(res.data.result.reviews); 
        })
        .catch(err => {
          console.log("ERROR HAS OCURED" + err);
        });
    }, []);


    return (
        <div>
            <ul>{reviews.map(review => (
                
            <li>{review.author_name} : {review.text}</li>
               
            ))} </ul>
        </div>
    )
}
