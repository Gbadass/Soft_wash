import React, { useEffect, useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
function UserForgetPassword() {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErr(true);
            return;
        }
       
    };


    return (
        <div className='container mt-4'>
            <div className='container-xxl mt-5'>
                <h1 className="text-center fs-1 fw-bold">My account</h1>
                <p className='text-center'><IoChevronDown className='fs-3 mt-3'/></p>
                <p>Lost your password? Please enter your phone or email address. You will receive a link to create a new password via email.</p>

                <form className='row' onSubmit={handleSubmit}>
                    <div className="col mb-5">
                        <label>Phone or email <span className="text-danger">*</span> </label>
                        <input type="email" className="form-control border border-top-0 border border-end-0 border border-start-0 rounded-0" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {err === true && email === "" ? <p className="text-danger fst-italic ">Enter a phone number or email address.</p> : null}
                    </div>
                    <button type="submit" class="btn btn-primary">RESET PASSWORD</button>
                </form>
            </div>

        </div>
    )
}

export default UserForgetPassword;