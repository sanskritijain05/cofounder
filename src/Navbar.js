import React from 'react'
import './App.css'

export const Navbar = () => {
    return (


        <div className="nav">
            <nav>
                <div className="left">
                   <a href="/"> Fiaco</a>
                </div>
                <div className="center">
                    <ul>
                        <li><a href="./Find.js">Find a Cofounder</a></li>
                        <li><a href="./Internship.js">Internships</a></li>
                        <li><a href="./Developer.js">Developers</a></li>
                   
                        <li><a href="./Login">Login</a></li>
    
                    </ul>
                </div>
            
            </nav>
        </div>
    )
}

export default Navbar;