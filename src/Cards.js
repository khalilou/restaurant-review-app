import React from 'react'
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
