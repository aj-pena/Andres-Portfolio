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
                       how web applications can help companies and clients grow more efficiently. Integral problem-solver and
                       passionate learner with Bachelor and Masters degrees in Civil Engineering. Recently earned a Certificate in 
                       Full-stack Development from the University of Toronto, and acquired newly developed skills in JavaScript, 
                       CSS, React.js, SQL, MongoDB, Express.js and Node.js. Strengths in curiosity, drive to grow, responsibility, teamwork, and management 
                       of multiple priorities. To learn more about my skills, don't forget to checkout the Resume page by clicking on the menu above.
                  </p>    
              </div>
            </div>
        </div>
    )
}

export default About
