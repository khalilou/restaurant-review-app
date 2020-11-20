import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import AddReviews from './addReviews';
import RestaurantImage from './RestaurantImage';
export default function Cards(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <div>
                {props.restaurants.map((rest,index) =>               
                    (
                   <>
                    <Card style={{ width: '18rem' }} onClick={handleShow} key={index}>
                        <Card.Body>
                            {rest?.photos?.length === 'undefined' || rest?.photos  === 'undefined' || rest?.photos[0]?.photo_reference === 'undefined' || rest?.photos?.length === null || rest?.photos  === null || rest?.photos[0]?.photo_reference === null ?  null : <RestaurantImage imageRef={rest?.photos[0]?.photo_reference} /> }
                            <Card.Title>{rest.name}</Card.Title>
                            <StarRatings
                                rating={rest.rating}
                                starRatedColor="blue"
                                numberOfStars={5}
                                name='rating'
                            />
                        </Card.Body>
                        <AddReviews />
                    </Card>
            
                      {/* <Modal show={show} onHide={handleClose}>
            
                        <Modal.Body>
                                <img src={"https://via.placeholder.com/150x150"} />
                                <p>{rest.user_ratings_total}</p>  
                        </Modal.Body>
            
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>   */}
                   </>                              
                    ))}
            </div>

        )
}
