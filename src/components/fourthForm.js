import './fourthFormStyles.css';
function FourthForm({setActive}){
    return(
        <div className="fourthform-content">
            <div className="fourthform-header">
                <h5 id="header">Finishing Up</h5>
                <p id="headerinfo">Double check everything looks OK before confirming.</p>
            </div>

            <div className="totals">

            




            </div>

            <div className="footer-buttons">
                <button id="fourthFromback" onClick={()=>setActive(-1)}>Go Back</button>
                <button onClick={()=>setActive(1)}> Confirm</button>
            </div>

        </div>
    )
}
export default FourthForm;