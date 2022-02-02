import React from 'react'

function Footer() {
    return (
        <div>
              {/* <!-- Contact Me --> */}
            <div className="row contact">
                {/* <!-- section title --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                    <h2>Contact Me</h2>
                </div>
                {/* <!-- contact methods --> */}
                <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                    <ul className="contact-methods">
                        <li><a href="tel:+16139817712">613.981.7712</a></li>
                        <li><a href="mailto:andrespena.ap@outlook.com">Email Me</a></li>
                        <li><a href="http://www.linkedin.com/in/andrespenacabra">LinkedIn</a></li>
                        <li><a href="https://github.com/aj-pena">GitHub</a></li>
                    </ul>
                </div>              
              </div>
        </div>
    )
}

export default Footer
