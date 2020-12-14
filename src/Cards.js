import React from 'react'
import Restaurant from './Restaurant'
export default function Cards(props) {

        return (
            <div>
                {props.restaurants.filter(rest => (rest.rating >= props.min)&&(rest.rating <= props.max)).map((rest,index) =>               
                    (
                        <Restaurant rest={rest} key={index} />
                    ))}
            </div>

        )
}
