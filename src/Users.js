import React from 'react'
import './App.css'
import profile_1 from './img/kathreen.jpg'
import profile_2 from './img/Sarah.jpg'
import profile_3 from './img/john.jpg'
import profile_4 from './img/seth.jpg'

export const Users = () => {
    return (
        <>

            <div className="testimonials">
            <h1>What our users say about us</h1>
  
  <div className="test-cards">

                <div className="cards3">
                    <div className="card3">
                        <div className="left-image">
                            <img src={profile_1} alt="profile-1"/>
                            <div className="left-image-content">
                            <h2>Kathreen Johnson</h2>
                            <p>Freshman in College</p>
                            </div>
                        </div>
                        <div className="right-content">
                            <p>"I was able to find a perfect cofounder to help me build my startup. " </p>
                        </div>
                    </div>





                    <div className="card3">
                   
                        <div className="left-image">
                            <img src={profile_2}alt="profile-2"/>
                            <div className="left-image-content">
                            <h2>Sarah Decker</h2>
                            <p>Junior in High School</p>
                            </div>
                        </div>
                        <div className="right-content">
                            <p> "I've dreamt about Building my own company but I lacked technical skills, with Fiaco I was able to find the best developer, who helped me build the software for my company " </p>
                        </div>
                    </div>
                
                    <div className="card3">


                    <div className="left-image">
                            <img src={profile_3} alt="profile-3"/>
                            <div className="left-image-content">
                            <h2>John Cliff</h2>
                            <p>Senior in High School</p>
                            </div>
                        </div>
                        <div className="right-content">
                            <p> "I was looking for a paid Internshipn  for a while, and then I came across Fiaco. Fiaco helped me found my dream Internship at a respectful Startup" </p>
                        </div>
                    </div>


                    <div className="card3">

                    <div className="left-image">
                            <img src={profile_4} alt="profile-4"/>
                            <div className="left-image-content">
                            <h2>Seth</h2>
                            <p>Founder of Coalco</p>
                            </div>
                            <br />  <br />
                        </div>
                        <div className="right-content">
                            <p> "I Started my company a year ago, but I wasnt able to find a good team to help me with my startup, Fiaco has helped me find the best team of Interns" </p>
                        </div>


                    </div>
                </div>
                <br /><br /><br /><br />
            </div>

          
          
            </div>
 

        </>
    )
}

export default Users;