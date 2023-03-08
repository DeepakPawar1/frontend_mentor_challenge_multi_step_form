import './fourthFormStyles.css';
import {useState,useContext} from 'react';
import dataContext from '../context/data';
import { data } from './thirdForm';
function FourthForm({setActive}){
    const {cdata,add_data} = useContext(dataContext);
    console.log(cdata,"fourthform");
    let finaltotal = 0;
    finaltotal += cdata.plan.amount;
    const renderData = data.map((da,index)=>{
        // cdata.add_ons.map(()=>{

        // })
        if (cdata.add_ons.includes(index) ){
            finaltotal +=  cdata.plan.type ? data[index]['amount_yearly']: data[index]['amount'] 
            return (
                <div className="itotals">
                    <p> {da.title}</p>
                    <h5>{cdata.plan.type ? `$${data[index]['amount_yearly']}/yr`: `$${data[index]['amount']}/mo` }</h5>
                </div>
            )
        }
    })
    return(
        <div className="fourthform-content">
            <div className="fourthform-header">
                <h5 id="header">Finishing Up</h5>
                <p id="headerinfo">Double check everything looks OK before confirming.</p>
            </div>

            <div className="totals">

            <div className="plan">
                <div>
                    <h5>{cdata.plan.name} {cdata.plan.type ? "(Yearly)": "(Monthly)"}</h5>
                    <p>Change</p>
                </div>
                <div className="amt">
                   <h5> {cdata.plan.type ? `$${cdata.plan.amount}/yr`: `$${cdata.plan.amount}/mo` }</h5>
                </div>
            </div>
            <hr></hr>
            <div className="prevdata">
                {renderData}
            </div>
            <div className="finaltotal">
                <p>Total {cdata.plan.type ? "(per year)" : "(per month)"}}</p>
                <p>{cdata.plan.type ? `+$${finaltotal}/yr`:`+$${finaltotal}/mo`}</p>
            </div>



            </div>

            <div className="footer-buttons">
                <button id="fourthFromback" onClick={()=>setActive(-1)}>Go Back</button>
                <button onClick={()=>setActive(1)}> Confirm</button>
            </div>

        </div>
    )
}
export default FourthForm;