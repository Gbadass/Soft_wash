
import ResetPaswdForm from "../components/ResetPaswdForm";
import Img from "../assets/images/reset7.png";
import "../styles/ResetPaswd.css"

function ResetPaswdPage(){
    return(
        <div className="d-flex form-bg">
            <div className="sub-portion reset-pic">
                <img src={Img} alt="" />
            </div>
            <div className="sub-portion">
                <div className="reset-header">
                    <h1>SOFT WASH</h1>
                    <h3>Reset Password</h3>
                </div>
                <ResetPaswdForm/>
            </div>            
        </div>
    )
}

export default ResetPaswdPage;