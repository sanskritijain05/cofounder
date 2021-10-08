import React from 'react'
import Profile from './Profile';
import Sarah from './img/Sarah.jpg'
import mike from './img/mike.jpg'
import max from './img/max.jpg'
import paul from './img/paul.jpg'
import steve from './img/steve.jpg'
import natalie from './img/natalie.jpg'



let github = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>


let essay = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
<path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
<path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
</svg>

export const Developer = () => {
    return (
        <>
            <div className="mainnn">


                <p>Find a perfect developer for your project</p>

                <div className="profiles">

                    <Profile
                        name="Sarah"
                        occupation="Junior at College"
                        expertise="Fullstack Developer"
                        location="$20 per hr"
                        img={Sarah}
                        pro= {github}
                        profile = "Github"
                    />
                    <Profile
                        name="Mike"
                        occupation="Senior at college"
                        expertise="Frontend Developer"
                        location="$10 per hr"
                        img={mike}
                        pro= {github}
                        profile = "Github"
                    />
                    <Profile
                        name="Maxine"
                        occupation="Sophomore at HS"
                        expertise="Backend Developer"
                        location="$15 per hr"
                        img={max}
                        pro= {github}
                        profile = "Github"
                    />
                    <Profile
                        name="Paul "
                        occupation="Freelancer"
                        expertise="Fullstack Developer"
                        location="$25 per hr"
                        img={paul}
                        pro= {github}
                        profile = "Github"
                    />
                    <Profile
                        name="Steve Peterson"
                        occupation="Freshman at college"
                        expertise="Frontend Developer"
                        location="$20 per hr"
                        img={steve}
                        pro= {github}
                        profile = "Github"
                    />
                    <Profile
                        name="Natalie"
                        occupation="Senior at High school"
                        expertise="Backend Developer"
                        location="$30 per hr"
                        img={natalie}
                        pro= {github}
                        profile = "Github"
                    />
                </div>

            </div>
        </>
    )
}

export default Developer;