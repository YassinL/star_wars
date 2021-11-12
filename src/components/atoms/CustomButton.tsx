import React from "react";

import styled from "styled-components";

interface ICustomButton {
  label?: string;
  onClick: (event: any) => Promise<void> | void;
}

const Button = styled.button`
  font-size: 16px;
  background-color: #050505;
  color: #fafafa;
  padding: 12px 20px;
  border-radius: 15px;
  border: solid 1px #fafafa;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
    color: #050505;
  }
`;

export const CustomButton = ({ label, onClick }: ICustomButton) => {
  return <Button onClick={onClick}>{label}</Button>;
};
