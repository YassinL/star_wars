import React from "react";
import { LoginForm } from "../components/organisms/LoginForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CustomLinkContainer = styled.span`
  margin-top: 2%;
  color: #fafafa;
  font-weight: bold;
`;

const CustomLink = styled(Link)`
  color: #fff8dc;
  text-decoration: none;

  &: hover {
    color: #daa520;
  }
`;

export const Login = () => {
  return (
    <LoginContainer>
      <LoginForm />
      <CustomLinkContainer>
        Don't have an account ? <CustomLink to="/register">Sign up</CustomLink>
      </CustomLinkContainer>
    </LoginContainer>
  );
};
