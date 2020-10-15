import React from 'react';
import data from './data-json-restaurant.json';
import Restaurant from './Restaurant'


export default function Cards() {

        
        return (
            <div>
                 {data.map((info) => (
                    <Restaurant data={info} />
                ))}
            </div>
        )
}
