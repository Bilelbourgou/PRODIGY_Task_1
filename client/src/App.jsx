import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  Anchor,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
  Paragraph,
} from "./Components";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [signinIn, setSigninIn] = useState(true);

  // State for sign-in form
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // State for sign-up form
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpRole, setSignUpRole] = useState('user'); // Default role is 'user'

  // State for errors
  const [error, setError] = useState('');

  // Handle sign-in
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signin', {
        email: signInEmail,
        password: signInPassword
      });
      console.log('Sign In:', response.data);
      // Add your logic for successful sign-in
      alert("user logged in successfully")
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // Handle sign-up
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
        role: signUpRole
      });
      console.log('Sign Up:', response.data);
      alert("user registred successfully")
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Container>
          <SignUpContainer signinIn={signinIn}>
            <Form onSubmit={handleSignUp}>
              <Title>Create Account</Title>
              <Input
                type="text"
                placeholder="Name"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
              <select
                value={signUpRole}
                onChange={(e) => setSignUpRole(e.target.value)}
                style={{
                  padding: '12px 15px',
                  margin: '8px 0',
                  width: '100%',
                  backgroundColor: '#eee',
                  border: 'none'
                }}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <Button type="submit">Sign Up</Button>
            </Form>
          </SignUpContainer>

          <SignInContainer signinIn={signinIn}>
            <Form onSubmit={handleSignIn}>
              <Title>Sign In</Title>
              <Input
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <Button type="submit">Sign In</Button>
            </Form>
          </SignInContainer>

          <OverlayContainer signinIn={signinIn}>
            <Overlay signinIn={signinIn}>
              <LeftOverlayPanel signinIn={signinIn}>
                <Title>Welcome Back!</Title>
                <Paragraph>
                  To keep connected with us please login with your personal info
                </Paragraph>
                <GhostButton onClick={() => setSigninIn(true)}>
                  Sign In
                </GhostButton>
              </LeftOverlayPanel>

              <RightOverlayPanel signinIn={signinIn}>
                <Title>Hello, Friend!</Title>
                <Paragraph>
                  Enter your personal details and start journey with us
                </Paragraph>
                <GhostButton onClick={() => setSigninIn(false)}>
                  Sign Up
                </GhostButton>
              </RightOverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
