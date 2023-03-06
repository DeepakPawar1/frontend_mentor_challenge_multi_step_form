import './mainbodyStyles.css';
import Sidepanel from './sidepanel';
import background from '../assets/images/bg-sidebar-desktop.svg';
import Firstform from './firstForm.js';
import SecondForm from './secondForm.js';
import { useState } from 'react';
function Mainbody(){

    const [active,setActive] = useState(0);
    const panelData = [
        {title: "STEP 1",description :"YOUR INFO"},
        {title: "STEP 2",description:"SELECT PLAN"},
        {title: "STEP 3",description:"ADD-ONS"},
        {title:"STEP 4",description:"SUMMARY"}
    ]
    function handlesetActive(num){
        console.log("setting active index",num)
        setActive((current)=>{return (current +num )});

    }
    return (<div className="main">
        <div className="left">
            <Sidepanel data={panelData} activeIndex={active}/>
        

        </div>
        <div className="right">
            {(()=>{
                console.log("Alright nearing switch");
                    switch(active){
                        case 0:
                            console.log("in case 0 ",active)
                            return <Firstform setActive={handlesetActive}></Firstform>;
                        case 1:
                            return <SecondForm setActive={handlesetActive}></SecondForm>
                        default:
                            console.log("in case default ",active)
                            return "";
                        }

                    })()
            }
            
        </div>
    </div>)
}
export default Mainbody;