



import Img from "../assets/images/reset7.png";
import AuthenticatePaswd from "../components/AuthenticatePaswd";
import CountdownTimer from "../components/CountdownTimer";




function AuthenticatePaswdPage() {
    

    
    return (
        <div className="d-flex form-bg">
            <div className="sub-portion reset-pic">
                <img src={Img} alt="" />
            </div>
            <div className="sub-portion">
                <div className="reset-header">
                    <h1>SOFT WASH</h1>
                    <h3>Verify OTP</h3>
                </div>
                <AuthenticatePaswd />
                <div className="timeDiv">
                    <h5>Kindly enter the OTP sent to your mail</h5>  
                    <CountdownTimer />                  
                </div>
            </div>
        </div>
    );
    }
    
    export default AuthenticatePaswdPage;
    


