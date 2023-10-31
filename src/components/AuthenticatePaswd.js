import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/ResetPaswd.css"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function AuthenticatePaswd() {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [code6, setCode6] = useState("");
  const [err, setErr] = useState(false);
  const Navigate = useNavigate()


  const inputRefs = {
    code1: useRef(null),
    code2: useRef(null),
    code3: useRef(null),
    code4: useRef(null),
    code5: useRef(null),
    code6: useRef(null),
  };

  const newPaswdFunc = async (e) => {
    e.preventDefault();
    if (code1 === "" || code2 === "" || code3 === "" || code4 === "" || code5 === "" || code6 === "") {
      setErr(true);
      return;
    }
    const resetCode = code1 + code2 + code3 + code4 + code5 + code6;

    try {
      const resp = await axios.post("http://localhost:8003/auth/validate-reset", resetCode)
      if (resp.data.msg === "successful"){
        setTimeout(() => {
          Navigate("/auth/new-password")
        }, 3000)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const focusNextInput = (currentField, nextField) => {
    if (currentField.value.length === 1) {
      nextField.current.focus();
    }
  }

  return (
    <div className=''>
      <Container>
        <Form className='centralize reset-form mt-4' onSubmit={newPaswdFunc}>
          <Form.Group controlId="formBasicInput" className='reset-input'>
            <div className='auth-digits'>
              <Form.Control
                ref={inputRefs.code1}
                className='auth-digits-input'
                type="number"
                placeholder=""
                value={code1}
                onChange={(e) => {
                  setCode1(e.target.value.slice(0, 1));
                  focusNextInput(e.target, inputRefs.code2);
                }}
                min="0"
              />
              <Form.Control
                ref={inputRefs.code2}
                className='auth-digits-input'
                type="number"
                placeholder=""
                value={code2}
                onChange={(e) => {
                  setCode2(e.target.value.slice(0, 1));
                  focusNextInput(e.target, inputRefs.code3);
                }}
                min="0"
              />

              <Form.Control
                ref={inputRefs.code3}
                className='auth-digits-input'
                type="number"
                placeholder=""
                value={code3}
                onChange={(e) => {
                  setCode3(e.target.value.slice(0, 1));
                  focusNextInput(e.target, inputRefs.code4);
                }}
                min="0"
              />              

              <Form.Control
                ref={inputRefs.code4}
                className='auth-digits-input'
                type="number"
                placeholder=""
                value={code4}
                onChange={(e) => {
                  setCode4(e.target.value.slice(0, 1));
                  focusNextInput(e.target, inputRefs.code5);
                }}
                min="0"
              />

              <Form.Control
                ref={inputRefs.code5}
                className='auth-digits-input'
                type="number"
                placeholder=""
                value={code5}
                onChange={(e) => {
                  setCode5(e.target.value.slice(0, 1));
                  focusNextInput(e.target, inputRefs.code6);
                }}
                min="0"
              />

              <Form.Control
                ref={inputRefs.code6}
                className='auth-digits-input'
                type="number"
                placeholder=""
                value={code6}
                onChange={(e) => {
                  setCode6(e.target.value.slice(0, 1));
                  
                }}
                min="0"
              />

              
            </div>
            {err && (code1 === "" || code2 === "" || code3 === "" || code4 === "" || code5 === "" || code6 === "") ? (
              <span className='reset-err-msg'>Kindly enter the authentication code sent to your email</span>
            ) : null}
          </Form.Group>
          <Button className='reset-btn mt-3' type="submit">
            Verify
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AuthenticatePaswd;