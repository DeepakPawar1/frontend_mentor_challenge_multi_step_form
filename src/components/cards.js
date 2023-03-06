import './cardsStyles.css';
function Cards({cardData,isMonthly}){
    console.log(isMonthly,"aassd");
    const renderdata = cardData.map((data,index)=>{
return (<div className="carditem">
    <div className="card-inner">
                    <img id="cardimage" src={data.img} alt=""/>
            <h5 id="cardtitle">{data.title}</h5>
            <p id="cardamount">{data.amount}</p>
           {isMonthly ? <p id="yearlyplan">{data.yearly}</p>:''}
            </div>
</div>)
    })
    return (
        renderdata
    )
}
export default Cards;