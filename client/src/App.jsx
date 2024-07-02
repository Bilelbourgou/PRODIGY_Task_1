import React, { useState } from "react";
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
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // State for sign-up form
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  // Handle sign-in
  const handleSignIn = (event) => {
    event.preventDefault();
    console.log("Sign In:", { email: signInEmail, password: signInPassword });
    // Add your sign-in logic here
  };

  // Handle sign-up
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("Sign Up:", {
      name: signUpName,
      email: signUpEmail,
      password: signUpPassword,
    });
    // Add your sign-up logic here
  };

  return (
    <>
      <GlobalStyle />
      <div>
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
