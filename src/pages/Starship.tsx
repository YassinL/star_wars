import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const fetchOneStarship = async (id: string | undefined) => {
  const { data } = await axios(`http://swapi.dev/api/starships/${id}`);
  return data;
};

export const OneStarship = () => {
  const { id } = useParams();
  const { data } = useQuery("starships", () => fetchOneStarship(id));
  console.log(data);

  return (
    <OneStarshipContainer>
      <CardContainer>
        <DetailsContainer>{data?.name}</DetailsContainer>
        <DetailsContainer>Model - {data?.model}</DetailsContainer>
        <DetailsContainer>
          Max Speed - {data?.max_atmosphering_speed}
        </DetailsContainer>
      </CardContainer>
    </OneStarshipContainer>
  );
};

const OneStarshipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  text-align: start;
  background-color: #211a23;
  color: #cecece;
  width: 600px;
  border-radius: 10px;
`;

const DetailsContainer = styled.span`
  color: #fafafa;
  padding: 10px;
  margin-left: 10px;

  &:first-child {
    color: #daa520;
  }
`;
