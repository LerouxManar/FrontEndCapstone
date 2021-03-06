import React from "react"
import ContactCard from "./ComponentJobs"
import jobsData from "./jobs"


function JobPosting (){

    const JobsPosting = jobsData.map (postings => 
    
    <ContactCard

    key={postings.id} 
    jobtitle={postings.jobtitle}
    company={postings.company}
    applicants={postings.applicants}
    location={postings.location}
    description={postings.description}
 
    /> )

    return(
        
        <div className="contact-card">

                {JobsPosting}
               
        
        </div>



    )
}

export default JobPosting;