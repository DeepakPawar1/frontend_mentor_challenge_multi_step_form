import './firstForm.css';

import {useContext, useState} from 'react';
import dataContext from '../context/data';
function Firstform({setActive}){

    const {cdata,add_data} = useContext(dataContext);
    const [name,setName] = useState(cdata.personal_info.name);
    const [email,setEmail] = useState(cdata.personal_info.email);
    const [mob,setMob] = useState(cdata.personal_info.mob);
    const handleName=(event)=>{setName(event.target.value)};
    const handleEmail=(event)=>{setEmail(event.target.value)};
    const handleMob=(event)=>{setMob(event.target.value)};
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        add_data({personal_info: {name,email,mob}});
        setActive(1);
    }

    return (
        <div className="form-content">
            <div className="form-header">
                <h5 id="header">Personal Info</h5>
                <p id="headerinfo">Please provide your name,email address, and phone number.</p>
            </div>
            <div className="info">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        
                   <label>Name</label> 
                    <input  value={name} onChange={handleName}  type="text" required/>
                    </div>
                    <div>
                    <label>Email Address</label> 
                    <input value={email} onChange={handleEmail} type="email" required/>
                    </div>
                    <div>
                    <label>Phone Number</label> 
                    <input value={mob} onChange={handleMob} type="tel" required/>
                    </div>
                    <div className="footer-buttons">
                        <button id="submit"  type="submit">Next Step</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default Firstform;