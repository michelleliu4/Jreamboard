import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Password, Mail } from "./LoginConstants.js";

export default function Login() {

  return (
    <Content />
  );
}

function Content(){
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Logs in normally
  const handleSubmit = (event) => {

    window.location.href='/Feed';

    // //Prevent page reload
    // event.preventDefault();
    // var { uname, pass } = document.forms[0];

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Creates account
  const handleSubmit2 = (event) => {
    window.alert('An account has been created. Please log in.');
    
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="Login-error">{errorMessages.message}</div>
    );
  
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handler = () => setVisible(true);
  const handler2 = () => setVisible2(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const closeHandler2 = () => {
    setVisible2(false);
    console.log("closed");
  };
  const renderForm = (
    <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onSubmit={handleSubmit}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}> JreamBoard</Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              type="text"
              name="uname"
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              contentLeft={<Mail fill="currentColor" />}
              required
            />
            {renderErrorMessage("uname")}
            <Input
              type="password"
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
              required
            />
            {renderErrorMessage("pass")}
            
          </Modal.Body>
          <Modal.Footer>
            <Button className="Login-signin-close" auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button className="Login-signin-button2" auto onClick={handleSubmit}>
              Sign In
            </Button>
            
          </Modal.Footer>
        </Modal>
  )

  const renderForm2 = (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible2}
      onSubmit={handleSubmit2}
      onClose={closeHandler2}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Text b size={18}> JreamBoard</Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          type="text"
          name="uname"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<Mail fill="currentColor" />}
          required
        />
        <Input
          type="password"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<Password fill="currentColor" />}
          required
        />
        <Input
          type="text"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="First Name"
          contentLeft={<Password fill="currentColor" />}
          required
        />
        <Input
          type="text"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Last Name"
          contentLeft={<Password fill="currentColor" />}
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="Login-createaccount-close" auto flat color="error" onClick={closeHandler2}>
          Close
        </Button>
        <Button className="Login-createaccount-button2" auto onClick={handleSubmit2}>
          Create Account
        </Button>
        
      </Modal.Footer>
    </Modal>
  )

  return (
    <div className="Login-app">
      <div className="Login-form">
        <div className="Login-text">
          Welcome!
        </div>
        <Button className="Login-signin-button" auto onClick={handler}>Sign In</Button>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        
        
        
        <Button className="Login-createaccount-button" auto onClick={handler2}>Create Account</Button>
        {isSubmitted ? <div>Account successfully created</div> : renderForm2}
      </div>
    </div>
  );
}