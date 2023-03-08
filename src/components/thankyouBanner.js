import './thankyouBannerStyles.css';
import Thanks from '../assets/images/icon-thank-you.svg';
function Thankyoubanner(){
    return (
        <div className="thankyou-content">
            <img id="thankyouimg" src={Thanks} alt=""/>
            <h5 id="thanks-text">Thank you!</h5>
            <p id="thanks-info"> Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}
export default Thankyoubanner;