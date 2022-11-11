import React from "react";
import { Link } from "react-router-dom";
const Home =()=>{
    return(
    <section>
        <div className="home-wrapper">
           <header>
            <img src="/images/ex.png"/>
            </header>  
            <div className="data-details">
             <ul>
                <li className="active">invoices</li>
                <li><Link to='/new'>add new</Link></li>
                <li>import</li>
                <li>export</li>
             </ul>
            </div>
            <div className="input-wrapper">
                <input type='search' placeholder="Search of filter results"/>
            </div>
            <div className="table-wrapper">
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Invoice date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>123</td>
                        <td>Tanya</td>
                        <td>ksh 12342</td>
                        <td>2022 jan</td>
                        <td>paid</td>
                        <td><div className="circ-wrapper">
                         <div className="circ"></div>  
                         <div className="circ"></div>  
                         <div className="circ"></div>  
                         </div></td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>123</td>
                        <td>Tanya</td>
                        <td>ksh 12342</td>
                        <td>2022 jan</td>
                        <td>paid</td>
                        <td><div className="circ-wrapper">
                         <div className="circ"></div>  
                         <div className="circ"></div>  
                         <div className="circ"></div>  
                         </div></td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
    )
}
export default Home
