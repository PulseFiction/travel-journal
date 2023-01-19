import React from "react"
import Pin from "../assets/pin.svg"

export default function Card(props) {
    return (
        <>
        <div className="card--container">
        <img className="card--image"src={props.imageUrl}/>
        <div className="card--info">
            <div className="card--location">
                <img className="card--location__pin" src={Pin}/>
                <h3>{props.location}</h3>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <h4 className="card--date">{`${props.startDate} - ${props.endDate}`}</h4>
            <p className="card--description">{props.description}</p>   
        </div>
        </div>
        <div className="card--line__container">
            <hr className="card--line" />
        </div>
        </>
        
       
    )
}