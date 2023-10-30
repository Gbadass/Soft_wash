



import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/ResetPaswd.css"


function ResetPaswdForm() {

  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);


  const resetPaswdFunc = (e) => {
    e.preventDefault();
    if (email === ""){
        setErr(true);
        return;
    }
}


  return (
    <div className=''>
        <Container>
          <Form className='centralize reset-form mt-4' onSubmit={resetPaswdFunc}>
          <Form.Group controlId="formBasicEmail" className='reset-input'>
            <Form.Label htmlFor="formBasicEmail" className='reset-input-headers'>Email address</Form.Label>
            <Form.Control type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {err && email===""? <span className='reset-err-msg'>Kindly enter your email</span> : null}
          </Form.Group>
          
          <Button className='reset-btn mt-3' type="submit">
            Submit
          </Button>        
          </Form>
        </Container>
    </div>
  );
}

export default ResetPaswdForm;