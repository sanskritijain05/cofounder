import React from 'react'
import Profile from './Profile';
import Sarah from './img/Sarah.jpg'
import Seth from './img/seth.jpg'
import Kathreen from './img/kathreen.jpg'
import Anton from './img/anton.jpg'
import Rayul from './img/rayul.jpg'
import Shruti from './img/shruti.jpg'


export const Copro = () => {
    return (
        <>
            <div className="mainnn">
                

                <p>Find your Tech Partner</p>

                <div className="profiles">

                    <Profile
                        name="Sarah Decker"
                        occupation="High school Student"
                        expertise="Technology"
                        location="Toronto, Canada"
                        img={Sarah}
                    />

                    <Profile
                        name="Seth"
                        occupation="Freshman at College"
                        expertise="Technology"
                        location="London"
                        img={Seth}
                    />

                    <Profile
                        name="Kathreen boe"
                        occupation="Senior at College"
                        expertise="Technology"
                        location="Ontario, Canada"
                        img={Kathreen}
                    />
                      <Profile
                        name="Antom Lopez"
                        occupation="Freshman"
                        expertise="Technology"
                        location="California"
                        img={Anton}
                    />

                    <Profile
                        name="Rayul"
                        occupation="Junior at HS"
                        expertise="Technology"
                        location="Portugal"
                        img={Rayul}
                    />

                    <Profile
                        name="Shruti kaur"
                        occupation="Junior at college"
                        expertise="Technology"
                        location="Punjab, India"
                        img={Shruti}
                    />

                </div>

            </div>
        </>
    )
}

export default Copro;