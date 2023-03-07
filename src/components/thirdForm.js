import './thirdFormStyles.css';
import AddonLists from './addonLists.js'
function ThirdForm({setActive}){
    const data= [
        {title:"Online Services",description:"Access to multiplayer games",amount:1},
        {title:"Larger Storage",description:"Extra 1tb of cloud save",amount:2},
        {title:"Customizable profile",description:"Custom theme on your profile",amount:2}
    ]
    return (
        <div className="thirdform-content">
            <div className="thirdform-header">
                <h5 id="header">Pick add-ons</h5>
                <p id="headerinfo">Add ons help enhance your gaming experience.</p>
            </div>

            <div className="addons">

            <AddonLists addonlistData={data}/>




            </div>
            <div className="footer-buttons">
                <button id="secondFromback" onClick={()=>setActive(-1)}>Go Back</button>
                <button onClick={()=>setActive(1)}> Next Step </button>
            </div>
        </div>
    );
}
export default ThirdForm;