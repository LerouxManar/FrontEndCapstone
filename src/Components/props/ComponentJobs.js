import React from "react"
import  "./JobPosting.css"
import {Link} from "react-router-dom"

function ContactCard(props){

    return(
        <div className="boxProps">
            <section className="JobsPostings" >
            <h3>{props.jobtitle}</h3>
            <h5>{props.company}</h5>
            <p>Applicants: {props.applicants}</p>
            <p>Location: {props.location}</p>
            <p className="Description">Job Description: {props.description}</p>
            </section>
            
        </div>
        
    )
}

export default ContactCard;