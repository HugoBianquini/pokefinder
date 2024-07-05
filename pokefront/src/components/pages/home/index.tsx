"use client";
import Button from "@/components/shared/Button";
import { Container, SearchContainer, InputButtonContainer } from "./styles";
import Input from "@/components/shared/Input";
import { ChangeEvent, useState } from "react";
import { getPokemonByName } from "@/services/pokeBackApi";
import { IPokemonResponse } from "@/services/pokeBackApi/types";
import { AxiosError } from "axios";
import PokemonComponent from "./partials/PokemonComponent";

const HomeComponent = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemon, setPokemon] = useState<IPokemonResponse>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChangePokemonName = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleRequestErrors = (status?: number) => {
    return status === 404
      ? console.log("Pokemon não encontrado")
      : console.log("Ocorreu um erro ao buscar o pokemon");
  };

  const handleSearch = async () => {
    if (pokemonName) {
      setLoading(true);
      try {
        const { data, status } = await getPokemonByName(pokemonName);
        setPokemon(data);
      } catch (err) {
        const { response } = err as AxiosError;
        handleRequestErrors(response?.status);
      }
      setLoading(false);
    }
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
          <Button onClick={handleSearch}>
            {isLoading ? "Carregando..." : "Pesquisar"}
          </Button>
        </InputButtonContainer>
        {pokemon && <PokemonComponent pokemon={pokemon} />}
      </SearchContainer>
      <img src="/images/pokemon.svg" alt="Pokemon Guy" />
    </Container>
  );
};

export default HomeComponent;
