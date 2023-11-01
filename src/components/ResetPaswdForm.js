import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/ResetPaswd.css";
import axios from "axios";

function ResetPaswdForm() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const Navigate = useNavigate();

  const resetPaswdFunc = async (e) => {
    e.preventDefault();
    if (email === "") {
      setErr(true);
      return;
    }
    const body = {
      email: email,
    };

    try {
      const resp = await axios.post(
        "http://localhost:8003/auth/reset-email",
        body
      );
      console.log(resp.data);
      if (resp.data.msg === "successful") {
        sessionStorage.setItem("softWash", JSON.stringify(resp.data.userExists))
        setTimeout(() => {
          Navigate("/UserLogin");
        }, 3000)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Container>
        <Form className="centralize reset-form mt-4" onSubmit={resetPaswdFunc}>
          <Form.Group className="reset-input">
            <Form.Label
              htmlFor="formBasicEmail"
              className="reset-input-headers"
            >
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {err && email === "" ? (
              <span className="reset-err-msg">Kindly enter your email</span>
            ) : null}
          </Form.Group>

          <Button className="reset-btn mt-3" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ResetPaswdForm;
