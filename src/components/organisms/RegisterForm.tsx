import axios from "axios";
import { CustomInput } from "../atoms/CustomInput";
import { useState } from "react";
import styled from "styled-components";
import StarWarsLogo from "../../assets/star_wars_logo.png";
import { CustomButton } from "../atoms/CustomButton";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #050505;
  padding: 3%;
  border-radius: 12px;
  border: solid 1px #fafafa;
  box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(206, 206, 206, 0);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 140px;

  & img {
    height: 100%;
    width: auto;
  }
`;

const InputContainer = styled.div`
  padding: 0 2%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2%;
`;

const ErrorMessage = styled.span`
  color: red;
`;

export const RegisterForm = () => {
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      setError(null);
      setIsLoading(false);

      const body = {
        firstname,
        lastname,
        password,
        username,
        email,
      };
      console.log("BODY", body);
      console.log("SUBMIT");
      const result = await axios.post(`https://api.pote.dev/users`, body);
      if (result.status === 201) {
        console.log("INSCRIT");
        navigate("/login");
      }
    } catch (err) {
      console.log("err", err);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {isLoading && <span> Loading...</span>}
      <FormContainer>
        <ImageContainer>
          <img src={StarWarsLogo} />
        </ImageContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputContainer>
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
        </InputContainer>
        <ButtonContainer>
          <CustomButton label="Register" onClick={handleSubmit} />
        </ButtonContainer>
      </FormContainer>
    </>
  );
};
