
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/ResetPaswd.css"


function AuthenticatePaswd() {

    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");
    const [code5, setCode5] = useState("");
    const [code6, setCode6] = useState("");
    const [err, setErr] = useState(false);

    const newPaswdFunc = (e) => {
        e.preventDefault();
        if (code1 === "" || code2 ==="" || code3 ==="" || code4 ==="" || code5 ==="" || code6 ==="" ){
            setErr(true);
            return;
        }
    }


  return (
    <div className=''>
        <Container>
          <Form className='centralize reset-form mt-4' onSubmit={newPaswdFunc}>
          <Form.Group controlId="formBasicInput" className='reset-input'>
            <div className='auth-digits'>
                <Form.Control className='auth-digits-input' type="input" placeholder="" value={code1} onChange={(e) => setCode1(e.target.value)}/>
                <Form.Control className='auth-digits-input' type="input" placeholder="" value={code2} onChange={(e) => setCode2(e.target.value)}/>
                <Form.Control className='auth-digits-input' type="input" placeholder="" value={code3} onChange={(e) => setCode3(e.target.value)}/>
                <Form.Control className='auth-digits-input' type="input" placeholder="" value={code4} onChange={(e) => setCode4(e.target.value)}/>
                <Form.Control className='auth-digits-input' type="input" placeholder="" value={code5} onChange={(e) => setCode5(e.target.value)}/>
                <Form.Control className='auth-digits-input' type="input" placeholder="" value={code6} onChange={(e) => setCode6(e.target.value)}/>

            </div>
            {err && (code1==="" || code2==="" || code3==="" || code4==="" || code5==="" || code6==="")? <span className='reset-err-msg'>Kindly enter the authentication code sent to your email</span> : null}
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