import './addonListStyles.css';
import {useState,useContext} from 'react';
import dataContext from '../context/data';
function AddonLists({addonlistData,isYearly,setaddOns,selectedaddons}){

    const {cdata,add_data} = useContext(dataContext);
    const [checkedState, setCheckedState] = useState(
     cdata.add_ons.length >0 ? cdata.add_ons : new Array(addonlistData.length).fill(false)
      );
    const handleClick=(index)=>{
        selectedaddons(index);
    }
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
        add_data({add_ons:checkedState})
    }
    // const adonarray = cdata.add_ons;
    // console.log(typeof addonarray,"llllllllS",cdata.add_ons);
    const renderData=  addonlistData.map((data,index)=>{
        
       return( 
       <div className="listitem" onClick={()=>{handleClick(index)}}>
          <input type="checkbox" checked={checkedState[index]} onChange={() => handleOnChange(index)}></input> 
            <div className="listdata">
                <h5 id="listitle">{data.title}</h5>
                <p id="listdescription">{data.description}</p>
            </div>
            <p id="listamount">{isYearly ? `+$${data.amount_yearly}/yr` : `+$${data.amount}/mo`}</p>
        </div>
        )
    })
    return (
        <div>{renderData}</div>
    )
}
export default AddonLists;