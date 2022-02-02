import React from 'react'
import Picture from '../../Assets/images/me.jpg'

function About() {
    return (
        <div>
             {/* <!-- About Me --> */}
            <div className="row about">
                {/* <!-- section title --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                  <h2>About Me</h2>
                  {/* <!-- Photo of me --> */}
                  <img className="me" src={Picture} alt="Photograph of Andrés Peña"/>
                </div>
                {/* <!-- content --> */}
                <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                  <p id="about-me">                        
                       Front-end web developer leveraging a background in transportation engineering to provide unique perspectives on 
                       how web applications can help cities and companies move more efficiently, safely, and fairly. Problem-solver and
                       avid learner with Bachelor and Masters degrees in Civil Engineering. Recently earned a Certificate in 
                       Full-stack Development from the University of Toronto, and acquired newly developed skills in JavaScript, 
                       CSS, React.js, SQL, MongoDB, Express.js and Node.js Strengths in creativity, responsibility, teamwork, and building 
                       projects from ideation to execution. <em>To learn more about my skills go to the <strong>Resume</strong> section.</em>
                       </p>    
              </div>
            </div>
        </div>
    )
}

export default About
