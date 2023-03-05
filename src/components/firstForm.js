import './firstForm.css';
function Firstform(){
    return (
        <div className="form-content">
            <div className="form-header">
                <h5 id="header">Personal Info</h5>
                <p id="headerinfo">Please provide your name,email address, and phone number.</p>
            </div>
            <div className="info">
                <form className="form">
                    <div>
                   <label>Name</label> 
                    <input type="text"/>
                    </div>
                    <div>
                    <label>Email Address</label> 
                    <input type="email"/>
                    </div>
                    <div>
                    <label>Phone Number</label> 
                    <input type="tel"/>
                    </div>
                    <div>
                        <button id="submit">Next Step</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default Firstform;