import { observer } from "mobx-react";
import { useEffect } from "react";
import styled from "styled-components";
import { useMobxStores } from "../hooks/useMobxStores";

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  text-align: start;
  background-color: #e5e5e5;
  width: 300px;
  border-radius: 7px;
`;

const CustomSpan = styled.div``;

export const Home = observer(() => {
  const { userStore } = useMobxStores();

  useEffect(() => {
    userStore.fetchUsers();
  }, [userStore]);

  return (
    <HomeContainer>
      {userStore.users.map((user) => {
        return (
          <UserContainer>
            <CustomSpan>Lastname : {user?.lastname}</CustomSpan>
            <CustomSpan>Firstname : {user?.firstname}</CustomSpan>
            <CustomSpan>Username : {user?.username}</CustomSpan>
            <CustomSpan>Email : {user?.email}</CustomSpan>
          </UserContainer>
        );
      })}
    </HomeContainer>
  );
});
