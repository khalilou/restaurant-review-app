import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function GetReview(props) {
    const place_id = props.idRef;
    const [review, setReview] = useState("");
    useEffect(() => {
      axios
        .get(
            `https://googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyDayb3-2k0UBQiaVXDz1N_aot-nIw8BfIg`)
        .then(res => {
            setReview(res.request.responseURL); 
        })
        .catch(err => {
          console.log("ERROR HAS OCURED" + err);
        });
    }, []);


    // const getReviews = () => { 
    //     const fetchData = async () => {
    //       const results = await axios(
    //         `https://googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyDayb3-2k0UBQiaVXDz1N_aot-nIw8BfIg`)
    //       ; 
    //       setReview(results.review.result.reviews["text"])
    //     };
    //     fetchData();
    //   }


    return (
        <div>
            <p>{review}</p>
        </div>
    )
}
