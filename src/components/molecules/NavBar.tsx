import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "../atoms/CustomButton";

const NavBarContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;

const NavBarList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

// const CustomList = styled(Link)<{ isSelected: boolean }>`
//   color: #fafafa;
//   text-decoration: none;
//   padding: 10px;
//   margin: 15px;
//   font-size: 18px;

//   color: ${({ isSelected }) => (isSelected ? "#daa520" : "#fafafa")};
// `;

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
  position: absolute;
  top: 20px;
  left: 80%;
  margin-left: 30px;
`;

const LogoutButton = styled(CustomButton)`
  padding: 0px;
  backgroun-color: red;
`;

export const NavBar = () => {
  const match = useMatch("/login");
  const matchRegister = useMatch("/register");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {!match && !matchRegister && (
        <NavBarContainer>
          <TitleContainer>
            <Title>STAR WARS</Title>
          </TitleContainer>
          <NavBarList>
            <CustomList to="/home">Home</CustomList>
            <CustomList to="/people">People</CustomList>
            <CustomList to="/planets">Planets</CustomList>
            <CustomList to="/starships">Starships</CustomList>
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
