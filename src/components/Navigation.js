import React  from "react"
export default function Navigation(props) {
    return (
        <div className="col-12 col-sm-6 col-md-8 col-lg-8 navigation">
            {/* <!-- buttons --> */}
            
                    <ul className="headerBtns">
                      <li><button onClick={() => props.setCurrentPage(0)} >About Me</button></li>
                      <li><button onClick={() => props.setCurrentPage(1)}>Projects</button></li>
                      <li><button onClick={() => props.setCurrentPage(2)}>For Fun</button></li>
                      <li><button onClick={() => props.setCurrentPage(3)}>Resume</button></li>
                    </ul>                
              
        </div>
    );
}