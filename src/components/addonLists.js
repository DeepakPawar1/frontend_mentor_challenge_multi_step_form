import './addonListStyles.css';
function AddonLists({addonlistData}){
    const renderData=  addonlistData.map((data,index)=>{

       return( 
       <div className="listitem">
            <input type="checkbox"></input>
            <div className="listdata">
                <h5 id="listitle">{data.title}</h5>
                <p id="listdescription">{data.description}</p>
            </div>
            <p id="listamount">{`+$${data.amount}/mo`}</p>
        </div>
        )
    })
    return (
        <div>{renderData}</div>
    )
}
export default AddonLists;