import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const fetchOnePlanet = async (id: string | undefined) => {
  const { data } = await axios(`http://swapi.dev/api/planets/${id}`);
  return data;
};

export const OnePlanet = () => {
  const { id } = useParams();
  const { data } = useQuery("planets", () => fetchOnePlanet(id));
  console.log(data);

  return (
    <OnePlanetContainer>
      <CardContainer>
        <DetailsContainer>{data?.name}</DetailsContainer>
        <DetailsContainer>Population - {data?.population}</DetailsContainer>
        <DetailsContainer>terrain - {data?.terrain}</DetailsContainer>
      </CardContainer>
    </OnePlanetContainer>
  );
};

const OnePlanetContainer = styled.div`
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
