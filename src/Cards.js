import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

export default function Cards(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <div>
                {/* {props.userPlaces.map((place,index) =>               
                    (
                   <>
                    <Card style={{ width: '18rem' }} onClick={handleShow} key={index}>
                         <Card.Img variant="top" src={"https://via.placeholder.com/150x150"} key={index} />
                        <Card.Body>
                            <Card.Title key={index}>{place.name}</Card.Title>
                            <StarRatings
                                key={index}
                                rating={place.review}
                                starRatedColor="blue"
                                numberOfStars={5}
                                name='rating'
                            />
                        </Card.Body>
                    </Card>
            
                      <Modal show={show} onHide={handleClose} key={index} >
            
                        <Modal.Body key={index}>
                                <img src={"https://via.placeholder.com/150x150"} />
                                <p>{place.comment}</p>  
                        </Modal.Body>
            
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>  
                   </>                              
                    ))} */}
                {props.restaurants.map((rest,index) =>               
                    (
                   <>
                    <Card style={{ width: '18rem' }} onClick={handleShow} key={index}>
                         <Card.Img variant="top" src={"https://via.placeholder.com/150x150"} />
                        <Card.Body>
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
                                <img src={"https://via.placeholder.com/150x150"} />
                                <p>{rest.user_ratings_total}</p>  
                        </Modal.Body>
            
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>  
                   </>                              
                    ))}
            </div>

        )
}
