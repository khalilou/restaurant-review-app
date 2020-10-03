import React, { Component, useState } from 'react';
import data from './data-json-restaurant.json';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
export default class Cards extends Component {

    render() {
        // const show = false;
        // const handleShow = () => this.setState(show = true);
        // const [showState, setShow] = useState(false);

        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        return (
            <div>
                 {data.map(info => (
                     <div>
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
                    <Card.Body>
                        <Card.Title>{info.restaurantName}</Card.Title>
                    </Card.Body>
                </Card>
                 {/* <Modal.Dialog show={showState} onHide={handleClose}>
                    <Modal.Body>
                        <p></p>
                    </Modal.Body>
                </Modal.Dialog>  */}
                </div>
                 ))}
            </div>
        )
    }
}
