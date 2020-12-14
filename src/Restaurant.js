import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap';
import './Restaurants.css';
import StarRatings from 'react-star-ratings';
import AddReviews from './addReviews';
import RestaurantImage from './RestaurantImage';
import GetReview from './GetReview';


export default function Restaurant({rest}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card style={{ width: '18rem' }} onClick={handleShow} className="mb-3">
                <Card.Body>
                    {rest?.photos?.length === undefined || rest?.photos  === undefined || rest?.photos[0]?.photo_reference === undefined ?  null : <RestaurantImage imageRef={rest?.photos[0]?.photo_reference} /> }
                    <Card.Title>{rest.name}</Card.Title>
                    <StarRatings
                        rating={rest.rating}
                        starRatedColor="blue"
                        numberOfStars={5}
                        name='rating'
                    />
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                {rest?.photos?.length === undefined || rest?.photos  === undefined || rest?.photos[0]?.photo_reference === undefined ?  null : <RestaurantImage imageRef={rest?.photos[0]?.photo_reference} /> }

                <AddReviews />
                <GetReview idRef={rest.place_id} />
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
