import React from 'react'
import './App.css'
import Co from './Co'
import Howitworks from './Howitworks'
import profile from './img/profile.png'
import Pricing from './Pricing'
import Users from './Users'


export const Home = () => {
    return (
        <>

            <div className="container">
               
                <div className="heading">
                <br /><br /><br /><br /><br />
                    <h1>Welcome to <strong> Fiaco</strong></h1>
                
                    <h3>One Place for students to find their Cofounders, Freelance Developers, <br /> and Internships</h3>
                
                    <button><a href="#hiw">Explore</a></button>
                </div>

                

                <div className="image">
                    <img src={profile} alt="profile"/>
                </div>
            </div>

            <Howitworks/>
            <Co/>
            <Users/>
            <Pricing/>

        </>
    )
}

export default Home;
