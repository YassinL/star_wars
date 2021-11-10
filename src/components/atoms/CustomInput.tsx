import React, { CSSProperties } from "react";

import styled from "styled-components";

import { Clear } from "../atoms/SVG/Clear";

interface ICustomInput {
  label?: string;
  error?: string | unknown;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties | undefined;
  clear?: boolean;
}

const InputContainer = styled.div`
  margin: 20px 0;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px #fafafa;
  font-size: 14px;
  color: #fafafa;
`;

const Span = styled.span`
  & svg {
    color: #fafafa;
  }
`;

export const CustomInput = ({
  label,
  placeholder,
  onChange,
  style,
  clear,
}: ICustomInput) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Span>
        <Input placeholder={placeholder} onChange={onChange} style={style} />
        {clear && <Clear />}
      </Span>
    </InputContainer>
  );
};
