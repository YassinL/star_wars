import styled from "styled-components";

interface IProps {
  value: string;
  onChange: (event: any) => void;
  name?: string;
  type?: string;
  placeholder?: string;
}

const FormContainer = styled.form`
  width: 300px;
`;

const LabelContainer = styled.label``;

const InputContainer = styled.input`
  width: 100%;
  background-color: #211a23;
  padding: 7px;
  border: none;
  border-radius: 7px;
  color: #fafafa;
`;

export const SearchBar = ({
  value,
  onChange,
  name,
  type,
  placeholder,
}: IProps) => {
  return (
    <FormContainer>
      <LabelContainer>
        <InputContainer
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      </LabelContainer>
    </FormContainer>
  );
};
