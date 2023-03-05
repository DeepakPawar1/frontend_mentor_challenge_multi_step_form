import './mainbodyStyles.css';
import Sidepanel from './sidepanel';
import background from '../assets/images/bg-sidebar-desktop.svg';
import Firstform from './firstForm.js';

function Mainbody(){

    const panelData = [
        {title: "STEP 1",description :"YOUR INFO"},
        {title: "STEP 2",description:"SELECT PLAN"},
        {title: "STEP 3",description:"ADD-ONS"},
        {title:"STEP 4",description:"SUMMARY"}
    ]
    return (<div className="main">
        <div className="left">
            <Sidepanel data={panelData} activeIndex={0}/>
        

        </div>
        <div className="right">
            <Firstform/>
        </div>
    </div>)
}
export default Mainbody;