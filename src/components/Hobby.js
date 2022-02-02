import React from 'react'



function Hobby({title, resource, image, description}) {
    return (
                                        
        <div className="card card-medium medium-app">
            <img src={image} className="card-img-top medium" alt="screenshot of the deployed application's homepage"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className='project-description'>{description}</p>
                <a href={resource} className="card-link">more</a>                                          
            </div>                  
        </div>                           
        
    )
}

export default Hobby