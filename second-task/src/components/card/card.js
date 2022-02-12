import React from "react"
import locationIcon from "../../images/locatoinIcon.png"
import "./card.css"

export default function Card(props){
    console.log(props.imageUrl)
    
    return (
        <section className="card--box">
            <img src={props.imageUrl} alt=""/>
            <div className="card--description">
                <div className="card--description--location">
                    <img src={locationIcon} alt="" />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="card--description--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description--text">{props.description}</p>
            </div>
        </section>
    )
}