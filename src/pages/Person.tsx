import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const fetchOnePerson = async (id: string | undefined) => {
  const { data } = await axios(`http://swapi.dev/api/people/${id}`);
  return data;
};

export const OnePerson = () => {
  const { id } = useParams();
  const { data } = useQuery("people", () => fetchOnePerson(id));
  console.log(data);

  return (
    <OnePersonContainer>
      <CardContainer>
        <DetailsContainer>{data?.name}</DetailsContainer>
        <DetailsContainer>Height - {data?.height}</DetailsContainer>
        <DetailsContainer>Mass - {data?.mass}</DetailsContainer>
      </CardContainer>
    </OnePersonContainer>
  );
};

const OnePersonContainer = styled.div`
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
