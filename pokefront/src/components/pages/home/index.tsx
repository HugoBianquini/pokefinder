"use client";
import Button from "@/components/shared/Button";
import { Container, SearchContainer, InputButtonContainer } from "./styles";
import Input from "@/components/shared/Input";
import { ChangeEvent, useState } from "react";

const HomeComponent = () => {
  const [pokemonName, setPokemonName] = useState<string | undefined>();

  const handleChangePokemonName = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleSearch = () => {
    console.log("searching");
  };

  return (
    <Container>
      <SearchContainer>
        <h1>
          Encontre um <span>Pokemon</span>
        </h1>
        <InputButtonContainer>
          <Input
            placeholder="Digite o nome do pokemon"
            value={pokemonName}
            onChange={handleChangePokemonName}
          />
          <Button onClick={handleSearch}>Pesquisar</Button>
        </InputButtonContainer>
      </SearchContainer>
      <img src="/images/pokemon.svg" alt="Pokemon Guy" />
    </Container>
  );
};

export default HomeComponent;
