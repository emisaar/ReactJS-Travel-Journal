import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <div>
                <img src= {require(`../images/${props.img}`)} alt="NONE" className='card-place-img'/>
            </div>
            <div className='card-right'>
                <div className='card-location'>
                    <img src={require("../images/placeholder.png")} alt="Placeholder" className='card-placeholder'/>
                    <h2 className='card-country'>{props.location}</h2>
                    <a href={props.url}>
                        <h4 className='card-url'>View on Google Maps</h4>
                    </a>
                </div>
                <div className='card-info'>
                    <h1 className='card-place'>{props.place}</h1>
                    <div className='card-dates'><p>{props.start_date} - {props.end_date}</p></div>
                    <p className='card-about'>{props.about}</p>
                </div>
            </div>
        </div>
    )
}