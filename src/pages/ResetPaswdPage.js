
import ResetPaswdForm from "../components/ResetPaswdForm";
import Img from "../assets/images/reset8.png";
import "../styles/ResetPaswd.css"

function ResetPaswdPage(){
    return(
        <div className="d-flex">
            <div className="sub-portion">
                <div className="reset-header">
                    <h1>SOFT WASH</h1>
                    <h3>Reset Password</h3>
                </div>
                <ResetPaswdForm/>
            </div>
            <div className="sub-portion reset-pic">
                <img src={Img} alt="" />
            </div>
        </div>
    )
}

export default ResetPaswdPage;