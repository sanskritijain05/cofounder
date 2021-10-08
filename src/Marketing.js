import React from 'react'
import Profile from './Profile';
import Sarah from './img/Sarah.jpg'
import Seth from './img/seth.jpg'
import Kathreen from './img/kathreen.jpg'
import Anton from './img/anton.jpg'
import Rayul from './img/rayul.jpg'
import Shruti from './img/shruti.jpg'


let essay = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
</svg>


export const Marketing = () => {
    return (
        <>
            <div className="mainnn">


                <p>Find your Marketing Partner</p>

                <div className="profiles">

                    <Profile
                        name="Sarah Decker"
                        occupation="High school Student"
                        expertise="Marketing"
                        location="Toronto, Canada"
                        img={Sarah}
                        pro={essay}
                        profile="View Essay"
                    />

                    <Profile
                        name="Seth"
                        occupation="Freshman at College"
                        expertise="Marketing"
                        location="London"
                        img={Seth}
                        pro={essay}
                        profile="View Essay"
                    />

                    <Profile
                        name="Kathreen boe"
                        occupation="Senior at College"
                        expertise="Marketing"
                        location="Ontario, Canada"
                        img={Kathreen}
                        pro={essay}
                        profile="View Essay"
                    />
                    <Profile
                        name="Antom Lopez"
                        occupation="Freshman"
                        expertise="Marketing"
                        location="California"
                        img={Anton}
                        pro={essay}
                        profile="View Essay"
                    />

                    <Profile
                        name="Rayul"
                        occupation="Junior at HS"
                        expertise="Marketing"
                        location="Portugal"
                        img={Rayul}
                        pro={essay}
                        profile="View Essay"
                    />

                    <Profile
                        name="Shruti kaur"
                        occupation="Junior at college"
                        expertise="Marketing"
                        location="Punjab, India"
                        img={Shruti}
                        pro={essay}
                        profile="View Essay"
                    />

                </div>

            </div>
        </>
    )
}

export default Marketing;