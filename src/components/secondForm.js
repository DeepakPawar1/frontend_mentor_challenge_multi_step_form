import './secondForm.css';
import Cards from './cards';
import Image1 from '../assets/images/icon-arcade.svg';
import Image2 from '../assets/images/icon-advanced.svg';
import Image3 from '../assets/images/icon-pro.svg';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import {useState,useContext} from 'react';
import dataContext from '../context/data';
function SecondForm({setActive}){
    
    const {cdata,add_data} = useContext(dataContext);
    const[toggle,setToggle] = useState(cdata.plan.type);
    const handleToggle=()=>{
        setToggle((current)=>{
            return !current;
        })
    }
    const [selection,setSelection]=useState(cdata.plan);
    const handleSubmit=()=>{
        console.log("selection object value",selection)
        add_data(selection);
        console.log(cdata,"$$$$$$");
        setActive(1)
        
    }
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 14,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#03295a',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#03295a' : '#03295a',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 8,
          height: 9,
          borderRadius: 2,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#03295a' : '#03295a',
          boxSizing: 'border-box',
        },
      }));

    
    const cardData=[{
        img: Image1,
        title: "Arcade",
        amount: 9,
        amount_yearly: 90, 
        yearly: "2 months free"
    },
    {
        img: Image2,
        title: "Advanced",
        amount:12,
        amount_yearly: 120, 
        yearly: "2 months free"
    },
    {
        img: Image3,
        title: "Pro",
        amount: 15,
        amount_yearly: 150, 
        yearly: "2 months free"
    }
]
    return (
        <div className="secondform-content">
            <div className="secondform-header">
                <h5 id="header">Select your plan</h5>
                <p id="headerinfo">You have the option of monthly or yearly billing.</p>
            </div>
            <div className="cards">
                <Cards cardData={cardData} isYearly={toggle} setSelection={setSelection}/>
            </div>
            <div className="buttons">
                <h5 className={toggle ? '' : 'activeplan'}>Monthly</h5>
                <AntSwitch
            inputProps={{ 'aria-label': 'controlled' }}
            checked={toggle}
            onChange={handleToggle
                }
            size="small"/>
                <h5 className={toggle ? 'activeplan' : ''}>Yearly</h5>
            </div>
            <div className="footer-buttons">
                <button id="secondFromback" onClick={()=>setActive(-1)}>Go Back</button>
                <button onClick={handleSubmit}> Next Step </button>
            </div>
            
        </div>
    )
}
export default SecondForm;