
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/ResetPaswd.css"


function NewPaswdForm() {

    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [err, setErr] = useState(false);

    const newPaswdFunc = (e) => {
        e.preventDefault();
        if (code === "" || password ==="" || password2 ==="" ){
            setErr(true);
            return;
        }
    }


  return (
    <div className=''>
        <Container>
          <Form className='centralize reset-form mt-4' onSubmit={newPaswdFunc}>
          <Form.Group controlId="formBasicInput" className='reset-input'>
            <Form.Label htmlFor="formBasicInput" className='reset-input-headers'>Authentication Code</Form.Label>
            <Form.Control type="input" placeholder="" value={code} onChange={(e) => setCode(e.target.value)}/>
            {err && code===""? <span className='reset-err-msg'>Kindly enter the authentication code sent to your email</span> : null}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='reset-input m-2'>
            <Form.Label htmlFor="formBasicPassword" className='reset-input-headers'>Password</Form.Label>
            <Form.Control type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {err && password===""? <span className='reset-err-msg'>Kindly enter your new password</span> : null}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='reset-input m-2'>
            <Form.Label htmlFor="formBasicPassword" className='reset-input-headers'>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            {err && password===""? <span className='reset-err-msg'>Kindly confirm password</span> : null}
          </Form.Group>
          
          <Button className='reset-btn mt-3' type="submit">
            Submit
          </Button>        
          </Form>
        </Container>
    </div>
  );
}

export default NewPaswdForm;