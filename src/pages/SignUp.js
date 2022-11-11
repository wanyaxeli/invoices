import React from "react";
import { Link} from "react-router-dom";
const SignUp=()=>{
    const handleClick =(e)=>{
        e.preventDefault()
        window.location.href='/home'
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
                <h2>Sign in to Excuus Invoice</h2>
                <h6>Dont' have an acount?<span><Link to='/'>sign up</Link></span></h6>
                <div className="input-container">
                   <form>
                        <label htmlFor="email">Email</label><br/>
                        <input id="email" type='text'/><br/>
                        <label htmlFor="pwd">Password</label><br/>
                        <input id="pwd" type='text'/><br/>
                        <button  onClick={handleClick}>Sign In</button>
                   </form>
                </div>
            </div>
        </div>
    </section>
)
}
export default SignUp