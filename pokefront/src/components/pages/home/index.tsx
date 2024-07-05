"use client";
import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "@/components/shared/Button";
import { AxiosError } from "axios";
import Input from "@/components/shared/Input";
import { getPokemonByName } from "@/services/pokeBackApi";
import { IPokemonResponse } from "@/services/pokeBackApi/types";
import PokemonComponent from "./partials/PokemonComponent";
import {
  Container,
  SearchContainer,
  InputButtonContainer,
  Wrapper,
} from "./styles";

const HomeComponent = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemon, setPokemon] = useState<IPokemonResponse>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChangePokemonName = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleRequestErrors = (status?: number) => {
    return status === 404
      ? toast.warning("Pokemon não encontrado")
      : toast.error("Ocorreu um erro ao buscar o pokemon");
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
    <Wrapper>
      <Container>
        <SearchContainer>
          <h1>
            Encontre um <span>Pokemon</span>
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <InputButtonContainer>
              <Input
                placeholder="Digite o nome do pokemon"
                value={pokemonName}
                onChange={handleChangePokemonName}
              />
              <Button>{isLoading ? "Carregando..." : "Pesquisar"}</Button>
            </InputButtonContainer>
          </form>

          {pokemon && <PokemonComponent pokemon={pokemon} />}
        </SearchContainer>
        <img src="/images/pokemon.svg" alt="Pokemon Guy" />
      </Container>
      <ToastContainer theme="dark" />
    </Wrapper>
  );
};

export default HomeComponent;
