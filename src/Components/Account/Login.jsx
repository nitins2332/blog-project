import { React, useState } from "react";
import { Box, TextField, Button, Typography, styled } from "@mui/material";

import { imageURL } from "../../Constents/Data";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SighupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 30%);
`;

const Login = () => {
  const [account, toggleAccount] = useState("login");

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="back" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Login </LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SighupButton onClick={() => toggleSignup()}>
              Create an account{" "}
            </SighupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Enter Your Name" />
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Signup </LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SighupButton onClick={() => toggleSignup()}>
              Already have an account{" "}
            </SighupButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
