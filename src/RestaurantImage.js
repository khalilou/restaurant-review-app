import React, {useState, useEffect} from 'react'
import axios from 'axios';

function RestaurantImage(props) {
  const imgRef = props.imageRef;
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imgRef}&key=AIzaSyDayb3-2k0UBQiaVXDz1N_aot-nIw8BfIg&location`
      )
      .then(res => {
        setImgURL(res.request.responseURL);
      })
      .catch(err => {
        console.log("ERROR HAS OCURED" + err);
      });
  }, []);
console.log(imgURL);
  return <img src={imgURL} alt="restaurant-pic" />;
}
export default RestaurantImage;