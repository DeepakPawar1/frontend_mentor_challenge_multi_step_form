import './sidepanelStyles.css'
import {useEffect, useState} from 'react';
function Sidepanel ({data,activeIndex}){
   
    const [active, setActive] = useState(false);
    useEffect(()=>{
        setActive(activeIndex);
    },[active])
    // setActive(activeIndex);    
    const renderData= data.map((item , index)=>{
            return (
                <div className="content" index={index}>
                    <div className="items">
                        <span className={active===index ? "index active":"index"}>{index+1} </span>
                        <div className="data">
                            <p>{item.title}</p>
                            <h5>{item.description}</h5>
                        </div>
                    </div>
                </div>
            )
        })
    return(
        renderData
    )
}
export default Sidepanel;