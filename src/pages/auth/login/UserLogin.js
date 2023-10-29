
import { IoMailOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from "react-icons/io5";


function UserLogin() {
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
        fetch(" API URL ")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error occurred while fetching user data');
                }
            })
            .then((data) => {
                const foundUser = data.find((user) => user.email === email && user.password === password);
                if (foundUser) {

                    alert("Login successful");
                    console.log('Login successful:', foundUser);
                   
                } else {
                    alert('Login failed: Invalid email or password');
                    
                }
            })
            .catch((error) => {
                console.log('Error occurred during login:', error);
            });
    };


    return (
        <div>
            <div><br />
                <div className='container'>

                    <div className='container-xxl'>
                        <h1 className="text-center mb-5 ">Soft Wash</h1>
                        <p className='text-center mb-5'><IoChevronDown className='fs-3 mt-3'/></p>
                        <p className="text-center">Returning customer? <strong>Click here to login</strong></p>

                        <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Registration section.</p>



                        <form className='row' onSubmit={handleSubmit}>
                            <div className=" col">
                                <label>Phone or email <span className="text-danger">*</span> </label>
                                <input type="email" className="form-control border border-top-0 border border-end-0 border border-start-0 rounded-0" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {err === true && email === "" ? <p className="text-danger fst-italic ">Email Address Required</p> : null}
                            </div>

                            <div class="col mb-5">
                                <label>Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control border border-top-0 border border-end-0 border border-start-0 rounded-0" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {err === true && password === "" ? <p className="text-danger fst-italic">Password Required</p> : null}
                            </div>
                            <button type="submit" class="btn btn-primary">LOGIN</button>
                        </form>
                        <Link to="/UserForgetPassword">
                        <button type="submit" className=" btn border border-0 mt-5 bg-white">Lost your password?</button>
                        </Link>
                    </div>



                </div>

            </div>

        </div>
    )

}

export default UserLogin;