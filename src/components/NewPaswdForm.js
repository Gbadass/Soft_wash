import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/ResetPaswd.css";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function NewPaswdForm() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [err, setErr] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [textColorClass, setTextColorClass] = useState('');
  const Navigate = useNavigate()

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
    checkPasswordsMatch(e.target.value);
  };

  const checkPasswordsMatch = (confirmPassword) => {
    if (password === confirmPassword) {
      setPasswordCheck('Passwords are the same');
      setErr(false);
      setTextColorClass('passwrd-match'); 
    } else {
      setPasswordCheck('Passwords are not the same');
      setErr(true);
      setTextColorClass('passwrd-unmatch'); 
    }
  }

  const newPaswdFunc = async (e) => {
    e.preventDefault();
    if (password === "" || password2 === "") {
      setErr(true);
      return;
    }

    if (password !== password2) {
      setErr(true);
      setPasswordCheck('Passwords are not the same');
      setTextColorClass('red-text'); // Apply red text style
      return;
    }

    setErr(false);
    setPasswordCheck('Passwords are the same');
    setTextColorClass('green-text'); // Apply green text style
    // You can proceed with further actions here

    const user = JSON.parse(sessionStorage.getItem("softWash"))
    const resetInfo = {
      newPassword: password,
      email: user.email
    }
    try {
      const resp = await axios.put("http://localhost:8003/auth/password-reset", resetInfo)
      if (resp.data.msg === "successful"){
        setTimeout(() => {
          Navigate("/UserLogin")
        }, 3000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=''>
      <Container>
        <Form className='centralize reset-form mt-4' onSubmit={newPaswdFunc}>
          <Form.Group  className='reset-input m-2'>
            <Form.Label htmlFor="formBasicPassword" className='reset-input-headers'>Password</Form.Label>
            <Form.Control type="password" placeholder="" value={password} onChange={handlePasswordChange} />
            {err && password === "" ? <span className='reset-err-msg'>Kindly enter your new password</span> : null}
          </Form.Group>
          <Form.Group  className='reset-input m-2'>
            <Form.Label htmlFor="formBasicPassword" className='reset-input-headers'>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="" value={password2} onChange={handlePassword2Change} />
            <p className={`reset-message ${textColorClass}`}>{passwordCheck}</p>
          </Form.Group>
          <Button className={`reset-btn mt-3 ${password !== password2 ? "disabled" : null}`} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default NewPaswdForm;
