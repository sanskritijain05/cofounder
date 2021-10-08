import React from 'react'
import register from './img/register.png'

export const Register = () => {
    return (
        <>
            <div className="login">
                <img src={register} alt="Register" />

                <div className="form">
                    <form>
                        <br />
                        <h1>Sign up 🚀 <br /><b>Can't wait for you to be a part of Fiaco</b></h1>
                        <span>
                            <p>Full name &nbsp; &nbsp;  </p> <input type="name" name="name" placeholder="John Doe" />
                        </span>

                        <span>
                            <p>Email &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  </p> <input type="email" name="email" placeholder="Johndoe@email.com" />
                        </span>

                        <span>
                            <p>Password &nbsp;  &nbsp; </p> <input type="password" name="password" placeholder="********"></input>
                        </span>

                        <button type="submit"><a href="#">Create Account</a></button>
                        <br />
                        <p id="register">Already have an account?<a href="./Login"> Login</a> <br /><br />
                        </p>
                        <br />
                    </form>


                </div>


            </div>

        </>
    )
}


export default Register;