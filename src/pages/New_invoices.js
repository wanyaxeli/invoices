import React from "react";
const New_Invoice=()=>{
return(
    <div className="invoice-wrapper">
        <div className="select-wrapper">
            <p>New invoice</p>
            <select >
                <option value='company' selected>Company</option>
            </select>
        </div>
        <div className="data-wrapper">
           <div className="data-handler">
                <div className="text-wrapper"></div>
                <div className="data-input-wrapper"> 
                    <div className="invoice_date_wrapper">
                        <label htmlFor="Date" >Invoice date</label><br/>
                        <input type='date'/><br/>
                        <label htmlFor="Date" >Due date</label><br/>
                        <input type='date'/>
                    </div>
                    <div className="invoice_no_wrapper">
                        <label htmlFor="Date" >Invoice Number</label><br/>
                        <input type='text'/><br/>
                        <label htmlFor="Date" >Order Number</label><br/>
                        <input type='text'/>
                    </div>
            </div>
           </div>
           <div className="btn-add">
            <button>Add Item</button>
           </div>
        </div>
        <div className="table-wrapper data-table">
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Invoice date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </table>    
        </div>  
        <div className="items-added">
            <p>No items added</p>
        </div>
        <div className="btn-wrapper">
         <label>Notes</label><br/>
         <input type='text' placeholder='Enter Notes'/>
         <div className="btns">
          <button>Cancel</button>
          <button className="save">Save</button>
         </div>
        </div>          
    </div>
)
}
export default New_Invoice