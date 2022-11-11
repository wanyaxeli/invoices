import React from "react";
import { Route,Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import New_Invoice from "../pages/New_invoices";
import SignUp from "../pages/SignUp";
const Links=()=>{
return(
    <Routes>
         <Route path="/" exact element={<Login/>}/>
         <Route path="/signUp" exact element={<SignUp/>}/>
         <Route path="/home" exact element={<Home/>}/>
         <Route path="/new" exact element={<New_Invoice/>}/>
    </Routes>
)
}
export default Links