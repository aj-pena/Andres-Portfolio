import React from 'react'
import pdf from '../../Assets/pdf/Andrés_Peña.pdf'

function Resume() {
    return (
        
                
                <div className="row resume">
                    {/* <!-- section title --> */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                        <h2>Skills</h2>
                        <br/>
                            <a className="copy-resume" href={pdf}>Download a copy of my Resume</a>
                        <br/>
                    </div>

                    <div className="col-12 col-sm-2 col-md-2 col-lg-2">
                        <ul className='resumeUl'>
                            <li className= 'resumeList'><span >&#9899;</span>JavaScript</li>
                            <li className= 'resumeList'><span >&#9899;</span>HTML</li>
                            <li className= 'resumeList'><span >&#9899;</span>CSS</li>
                            <li className= 'resumeList'><span >&#9899;</span>Bootstrap</li>
                            <li className= 'resumeList'><span >&#9899;</span>NodeJs</li>
                        </ul>
                        
                    </div>
                    <div className="col-12 col-sm-2 col-md-2 col-lg-2">
                        <ul className='resumeUl'>
                            <li className= 'resumeList'><span >&#9899;</span>MySQL</li>
                            <li className= 'resumeList'><span >&#9899;</span>MongoDB</li>
                            <li className= 'resumeList'><span >&#9899;</span>Express.js</li>
                            <li className= 'resumeList'><span >&#9899;</span>React.js</li>
                            <li className= 'resumeList'><span >&#9899;</span>Git</li>
                        </ul>                        
                    </div>
                    <div className="col-12 col-sm-2 col-md-2 col-lg-2">
                        <ul className='resumeUl'>
                            <li className= 'resumeList'><span >&#9899;</span>Problem Solver</li>
                            <li className= 'resumeList'><span >&#9899;</span>Avid Learner</li>
                            <li className= 'resumeList'><span >&#9899;</span>Detail Oriented</li>
                            <li className= 'resumeList'><span >&#9899;</span>Team Player</li>
                        </ul>
                        
                    </div>
                    
                </div>
            
            
        
    )
}

export default Resume
