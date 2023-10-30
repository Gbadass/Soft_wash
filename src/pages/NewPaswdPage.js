import Img from "../assets/images/reset7.png";
import "../styles/ResetPaswd.css"
import NewPaswdForm from "../components/NewPaswdForm";

function NewPaswdPage(){
    return(
        <div className="d-flex">
            <div className="sub-portion reset-pic">
                <img src={Img} alt="" />
            </div>
            <div className="sub-portion">
                <div className="reset-header">
                    <h1>SOFT WASH</h1>
                    <h3>Reset Password</h3>
                </div>
                <NewPaswdForm/>
            </div>            
        </div>
    )
}

export default NewPaswdPage;