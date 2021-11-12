import axios from "axios";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { CardComponent } from "../components/molecules/CardComponents";
import { SearchBar } from "../components/molecules/SearchBar";
import LeftArrow from "../components/atoms/SVG/ArrowLeft";
import RightArrow from "../components/atoms/SVG/ArrowRight";

const fetchPlanets = async (page: number) => {
  const { data } = await axios(`http://swapi.dev/api/planets/?page=${page}`);
  return data;
};

export const Planet = () => {
  const [page, setPage] = useState(1);
  const { data, status, isLoading } = useQuery(["planets", page], () =>
    fetchPlanets(page)
  );

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(data);

  const planetfilter = useMemo(() => {
    if (!search) return data?.results;
    return data?.results.filter((planet) => {
      return planet.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, data]);

  const handleClick = () => {
    const filterP = planetfilter.filter((planet) => {
      return planet.population > 30000000;
    });
    setFilter(filterP);
  };
  console.log("filter", filter);

  return (
    <PlanetContainer>
      <SearchBarContainer>
        <SearchBar
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search a planet by name"
        />
      </SearchBarContainer>
      <FilterContainer onClick={() => handleClick()}>
        Filter Population over 30000000{" "}
      </FilterContainer>

      {isLoading && <span>Loading...</span>}
      {status === "error" && <span>Error fetching data </span>}
      {status === "success" && (
        <>
          {planetfilter &&
            planetfilter.map((planet, index) => {
              return (
                <CardComponent
                  style={{ color: "#daa520" }}
                  key={index}
                  name={planet.name}
                  detail1={`Population - ${planet.population}`}
                  detail2={`Terrain - ${planet.terrain}`}
                  path={"planets"}
                  id={planet.url.split("/").slice(-2, -1)[0]}
                />
              );
            })}
        </>
      )}
      <ButtonContainer>
        <ArrowContainer
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          <LeftArrow />
        </ArrowContainer>
        <ButtonPage>{page}</ButtonPage>
        <ArrowContainer
          onClick={() =>
            setPage((old) => (!data || !data.next ? old : old + 1))
          }
          disabled={!data || !data.next}
        >
          <RightArrow />
        </ArrowContainer>
      </ButtonContainer>
    </PlanetContainer>
  );
};

const PlanetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2%;
  margin-top: 30px;
`;

const ButtonPage = styled.div`
  text-align: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: #fafafa;
  margin: 5px;
  font-size: 18px;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 93%;
  left: 50%;
`;

const SearchBarContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 70px;
`;

const ArrowContainer = styled.div`
  height: 30px;
  cursor: pointer;

  & svg {
    height: 100%;
    width: auto;
    color: #fafafa;

    &:hover {
      color: #daa520;
    }
  }
`;

const FilterContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 400px;
  border-radius: 20px;
  background-color: #211a23;
  padding: 10px;
  cursor: pointer;
  color: #fafafa;

  &:hover {
    color: #daa520;
  }
`;
