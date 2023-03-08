import './cardsStyles.css';
function Cards({cardData,isYearly,setSelection}){
    console.log(isYearly,"aassd");
    function handleClick (data,isYearly){
        console.log("999",data,"$$$",isYearly)
        const amt = isYearly ? data.amount_yearly : data.amount
        setSelection({plan:{type:isYearly,name:data.title,amount:amt}})

    }
    const renderdata = cardData.map((data,index)=>{
return (<div className="carditem" onClick={()=>handleClick(data,isYearly)}>
    <div className="card-inner">
                    <img id="cardimage" src={data.img} alt=""/>
            <h5 id="cardtitle">{data.title}</h5>
            <p id="cardamount">{isYearly ? `$${data.amount_yearly}/yr`:`$${data.amount}/mo`}</p>
           {isYearly ? <p id="yearlyplan">{data.yearly}</p>:''}
            </div>
</div>)
    })
    return (
        renderdata
    )
}
export default Cards;