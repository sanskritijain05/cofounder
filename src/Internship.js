import React from 'react'
import Icard from './Icard';
import Kathreen from './img/kathreen.jpg'
import apple from './img/apple.jpg'
import amazon from './img/amazon.png'
import microsoft from './img/microsoft.jpg'

export const Internship = () => {
    return (
        <>

            <div className="Internship-cards">
                <Icard
                    logo={apple}
                    name="Apple"
                    date="3 days ago"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, neque? Fuga voluptatem pariatur dolorum ipsa sapiente repellendus eos corrupti nemo, dolorem vel possimus quos, quidem ratione, inventore deleniti. Sequi, nihil."
                    pay="$300"
                    time="1 month Internship"
                />

                <Icard
                    logo={amazon}
                    name="Amazon"
                    date="5 days ago"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, neque? Fuga voluptatem pariatur dolorum ipsa sapiente repellendus eos corrupti nemo, dolorem vel possimus quos, quidem ratione, inventore deleniti. Sequi, nihil."
                    pay="$350"
                    time="1 month Internship"
                />


                <Icard
                    logo={microsoft}
                    name="Microsoft"
                    date="1 week ago"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, neque? Fuga voluptatem pariatur dolorum ipsa sapiente repellendus eos corrupti nemo, dolorem vel possimus quos, quidem ratione, inventore deleniti. Sequi, nihil."
                    pay="$300"
                    time="1 month Internship"
                />

            </div>


        </>
    )
}

export default Internship;