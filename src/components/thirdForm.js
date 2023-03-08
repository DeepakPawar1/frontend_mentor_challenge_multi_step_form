import './thirdFormStyles.css';
import AddonLists from './addonLists.js'
import {useState,useContext} from 'react';
import dataContext from '../context/data';




const data= [
    {title:"Online Services",description:"Access to multiplayer games",amount:1,amount_yearly:10},
    {title:"Larger Storage",description:"Extra 1tb of cloud save",amount:2,amount_yearly:20},
    {title:"Customizable profile",description:"Custom theme on your profile",amount:2,amount_yearly:20}
]
function ThirdForm({setActive}){
    const {cdata,add_data} = useContext(dataContext);
    const [addOns,setaddOns] = useState([]);

    const selectedaddons = (index)=>{
        let newarray = addOns
        if (newarray.includes(index)){
            newarray.splice( newarray.indexOf(index), 1)
            
        }else{
            newarray.push(index)
        }
        setaddOns(newarray)
    }
    const handleSubmit = ()=>{
        const adon = {add_ons:addOns}
        add_data(adon)
        setActive(1)
    }
    const isYearly = cdata.plan.type
    
    return (
        <div className="thirdform-content">
            <div className="thirdform-header">
                <h5 id="header">Pick add-ons</h5>
                <p id="headerinfo">Add ons help enhance your gaming experience.</p>
            </div>

            <div className="addons">

            <AddonLists addonlistData={data} isYearly={isYearly} setaddOns={setaddOns} selectedaddons={selectedaddons}/>




            </div>
            <div className="footer-buttons">
                <button id="secondFromback" onClick={()=>setActive(-1)}>Go Back</button>
                <button onClick={handleSubmit}> Next Step </button>
            </div>
        </div>
    );
}
export {data};
export default ThirdForm;