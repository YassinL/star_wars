import React, { CSSProperties } from "react";

import styled from "styled-components";

interface ICustomInput {
  label?: string;
  error?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties | undefined;
}

const InputContainer = styled.div`
  margin: 10% 0;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  //   margin: 3%;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px #fafafa;
`;

const TextError = styled.span``;

export function CustomInput({
  label,
  error,
  placeholder,
  onChange,
  style,
}: ICustomInput) {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} onChange={onChange} style={style} />
      <TextError>{error && error.message}</TextError>
    </InputContainer>
  );
}
