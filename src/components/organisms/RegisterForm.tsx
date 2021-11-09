import { useMutation } from "react-query";
import axios from "axios";
import { CustomInput } from "../atoms/CustomInput";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #050505;
  padding: 2%;
  margin: 0 9%;
  border-radius: 12px;
  border: solid 1px #fafafa;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.75);
`;

export const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const registerUser = async (event: any) => {
    event?.preventDefault;
    const body = {
      firstname,
      lastname,
      password,
      username,
      email,
    };
    return await axios.post("https://jsonplaceholder.typicode.com/posts", body);
  };

  const { isLoading, isError, error, mutate } = useMutation(registerUser, {
    retry: 3,
  });

  console.log("error", error);

  return (
    <>
      {isLoading && <span> Loading...</span>}
      <FormContainer>
        <CustomInput
          placeholder="First Name"
          onChange={(event) => setFirstname(event?.target.value)}
        />
        <CustomInput
          placeholder="Last Name"
          onChange={(event) => setLastname(event?.target.value)}
        />
        <CustomInput
          placeholder="Password"
          onChange={(event) => setPassword(event?.target.value)}
        />
        <CustomInput
          placeholder="Username"
          onChange={(event) => setUsername(event?.target.value)}
        />
        <CustomInput
          placeholder="Email"
          onChange={(event) => setEmail(event?.target.value)}
        />
        <button
          onClick={() => {
            mutate({ firstname, lastname, password, username, email });
          }}
        >
          Register
        </button>
      </FormContainer>
    </>
  );
};
