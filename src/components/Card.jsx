import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Card(props) {
    return(
    <div className="card">
        <div className="row">
            <div className="col-5 image--col">
                <img src={props.imageUrl} className="card--image"></img>
            </div>
       
        
            <div className="card--stats col-7">
                <span><FontAwesomeIcon icon={faLocationDot} className="card--locationPin"></FontAwesomeIcon></span>
                <span className="card--location"> {props.location} </span>
                <span className="card--link">   <a href={props.googleMapsUrl} className="card--anchor">View on Google maps</a> </span>  
                <h2 className="card--title bold">{props.title}</h2>
                <p><span className="bold card--dates">{props.startDate} - {props.endDate}</span></p>
                <p className="card--description">{props.description}</p>
    
            </div> 
        </div>
       </div>
    )
}


/*export default function Card(props) {
    return(
    <div className="card">
        <img>{props.imageUrl}</img>
        <div className="card--stats">
            <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span>
            <span className="gray">{props.location}</span>
            <span className="gray">{props.googleMapsUrl}</span>
        </div>
        <h2>{props.title}</h2>
        <p><span className="bold">{props.startDate} - {props.endDate}</span></p>
        <p>{props.description}</p>
    </div>
    )
} */