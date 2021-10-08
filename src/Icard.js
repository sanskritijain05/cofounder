import React from 'react'


export const Icard = (props) => {
    return (
        <>
            <div className="Internship-cards">
                <div className="I-cards">
                    <div className="top">
                    <img src={props.logo}/>
                    <h1>{props.name} <br />
                    <span>{props.date}</span></h1> 
                    </div>

                    <div className="main-content">
                        <p>{props.description}</p>
                      <br />
                        <p>{props.time}</p>
                        <br />
                        <p>{props.pay}</p>
                        <br />
                        <button><a href="#">Apply Now</a></button>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Icard;