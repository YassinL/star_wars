import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICardComponent {
  name?: string;
  detail1?: string;
  detail2?: string;
  detail3?: string;
  style?: CSSProperties;
  id?: number;
  path?: string;
}

const CardContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  text-align: start;
  background-color: #211a23;
  color: #cecece;
  width: 300px;
  border-radius: 10px;
`;

const DetailsContainer = styled.div`
  padding: 3px;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const CardComponent = ({
  name,
  detail1,
  detail2,
  detail3,
  style,
  id,
  path,
}: ICardComponent) => {
  return (
    <LinkContainer to={`/${path}/${id}`}>
      <CardContainer>
        <DetailsContainer style={style}>{name}</DetailsContainer>
        <DetailsContainer>{detail1}</DetailsContainer>
        <DetailsContainer>{detail2}</DetailsContainer>
        <DetailsContainer>{detail3}</DetailsContainer>
      </CardContainer>
    </LinkContainer>
  );
};
