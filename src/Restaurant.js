import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';


export default function Restaurant(props) {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [rating, setCount] = useState(0);

        let info = props.data;

        const changeRating = () => {
            const nbNotes = info.ratings.length;
            
            const totalNotes = info.ratings.reduce((acc, rating) => {
              return acc + rating.stars;
            }, 0);
          
            const moyenne = totalNotes / nbNotes;
            if(moyenne != rating) {
                setCount(moyenne);
            }
            console.log(rating);
            // return rating;
          }
          changeRating();
        // const setCount = changeRating()
        //   console.log(changeRating())

    return (
        <div>
        <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={"https://via.placeholder.com/150x150"} />
            <Card.Body>
                <Card.Title>{info.restaurantName}</Card.Title>
                <StarRatings
                    rating={rating}
                    starRatedColor="blue"
                    changeRating={setCount}
                    numberOfStars={6}
                    name='rating'
                />
            </Card.Body>
        </Card>

          <Modal show={show} onHide={handleClose}>

            <Modal.Body>
                {info.ratings.map(rating =>
                    <p>{rating.comment}</p>  
                )}
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>  

        </div>
    )
}
