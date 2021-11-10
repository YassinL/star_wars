import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "../atoms/CustomButton";

const NavBarContainer = styled.div`
  display: flex;
  padding: 0 20px;
  width: 100vw;
`;

const NavBarList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const CustomList = styled(Link)`
  color: #fafafa;
  text-decoration: none;
  padding: 10px;
  margin: 15px;
  font-size: 18px;
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  font-family: poloOne;
  color: #fafafa;
`;

const ButtonContainer = styled.div`
  margin-left: 30px;
`;

const LogoutButton = styled(CustomButton)`
  padding: 0px;
  backgroun-color: red;
`;

const logOut = () => {
  let navigate = useNavigate();
  localStorage.clear();
  navigate("/login");
};

export const NavBar = () => {
  let match = useMatch("/login" || "/register");

  return (
    <>
      {!match && (
        <NavBarContainer>
          <TitleContainer>
            <Title>STAR WARS</Title>
          </TitleContainer>
          <NavBarList>
            <CustomList to="/home">Home</CustomList>
            <CustomList to="/characters">Characters</CustomList>
            <CustomList to="/planets">Planets</CustomList>
            <CustomList to="/spaceships">Spaceships</CustomList>
            <CustomList to="/profil">Profil</CustomList>
          </NavBarList>
          <ButtonContainer>
            <LogoutButton onClick={logOut} label="Logout" />
          </ButtonContainer>
        </NavBarContainer>
      )}
    </>
  );
};
