import { axiosClient } from "..";
import { IPokemonResponse } from "./types";

export async function getPokemonByName(name: string) {
  const { data, status } = await axiosClient.get<IPokemonResponse>(
    `/pokemon/${name}`
  );

  return { data, status };
}
