import React from "react";
import { RegisterForm } from "../components/organisms/RegisterForm";
import styled from "styled-components";

const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm />
    </RegisterContainer>
  );
};
