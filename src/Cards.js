import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import AddReviews from './addReviews';
import RestaurantImage from './RestaurantImage';
import GetReview from './GetReview';
import Restaurant from './Restaurant'
export default function Cards(props) {

        return (
            <div>
                {props.restaurants.map((rest,index) =>               
                    (
                        <Restaurant rest={rest} key={index} />
                    ))}
            </div>

        )
}
