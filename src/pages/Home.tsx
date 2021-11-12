import { observer } from "mobx-react";
import { useEffect } from "react";
import styled from "styled-components";
import { CardComponent } from "../components/molecules/CardComponents";
import { useMobxStores } from "../hooks/useMobxStores";

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2%;
  overflow-y: scroll;
  height: 80vh;
`;

export const Home = observer(() => {
  const { userStore } = useMobxStores();

  useEffect(() => {
    userStore.fetchUsers();
  }, [userStore]);

  return (
    <HomeContainer>
      {userStore.users.map((user, index) => {
        return (
          <CardComponent
            key={index}
            style={{ color: "#daa520" }}
            name={user.username}
            detail1={`Lastname - ${user.lastname}`}
            detail2={`Firstname - ${user.firstname}`}
            detail3={`Email - ${user.email}`}
          />
        );
      })}
    </HomeContainer>
  );
});
