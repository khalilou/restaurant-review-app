import React, {useState} from 'react'

export default function Filter(props) {

    return (
        <div>
            <label for="cars">Choose a car:</label>
                <select id="cars" name="cars" size="4" multiple onChange = {props.handlechange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
        </div>
    )
}
