import React from 'react'
import login from './img/login.png'
export const Login = () => {
    return (

        <>
            <div className="login">
                <img src={login}/>



                <div className="form">
                    <form>
                        <br />
                        <h1>Login 🚀 <br /><b>Long time no see? What's up?</b></h1>
                      

                        <span>
                            <p>Email &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  </p> <input type="email" name="email" placeholder="Johndoe@email.com"/>
                        </span>

                        <span>
                            <p>Password &nbsp;  &nbsp; </p> <input type="password" name="password" placeholder="********"></input>
                        </span>
                        

                        <button type="submit"><a href="#">Login</a></button>
<br />

                        <p id="register">New to Fiaco?<a href="./Register"> Create your account</a> <br /><br />
                        <a href="#">Forgot Password?</a></p>
                        <br />

                    </form>

                    
                </div>

            
            </div>
            
        </>
    )
}


export default Login;