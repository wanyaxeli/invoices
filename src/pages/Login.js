import React from "react";
import { Link } from "react-router-dom";
const Login =()=>{
    const handleClick =(e)=>{
        e.preventDefault()
        window.location.href='home'
    }
return(
    <section>
        <div className="login-wrapper">
            <div className="welcome_text-wrapper">
               <div>
               <h2>Welcome to Excuus Invoice</h2>
                 <p>This is where you get all list of invoices <br/> view status of the invoice and add new items </p>
               </div>
            </div>
            <div className="input_wrapper">
                <h2>Get Started</h2>
                <h6>Already have an acount?<span><Link to='/signUp'>sign in</Link></span></h6>
                <div className="input-container">
                   <form>
                         <label htmlFor="name">Name</label><br/>
                        <input id="name" type='text'/><br/>
                        <label htmlFor="email">Email</label><br/>
                        <input id="email" type='text'/><br/>
                        <label htmlFor="pwd">Password</label><br/>
                        <input id="pwd" type='text'/><br/>
                        <button onClick={handleClick}>Sign Up</button>
                   </form>
                </div>
            </div>
        </div>
    </section>
)
}
export default Login