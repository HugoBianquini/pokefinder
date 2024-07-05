"use client";
import { Container, SearchContainer } from "./styles";

const HomeComponent = () => {
  return (
    <Container>
      <SearchContainer>
        <h1>
          Encontre um <span>Pokemon</span>
        </h1>
      </SearchContainer>
      <img src="/images/pokemon.svg" alt="Pokemon Guy" />
    </Container>
  );
};

export default HomeComponent;
