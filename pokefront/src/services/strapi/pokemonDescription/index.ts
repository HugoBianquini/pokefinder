import { strapi } from "..";
import { IPokemonDescriptionResponse } from "./types";

export const getDescriptionByName = async (name: string) => {
  try {
    const { data } = await strapi.find<IPokemonDescriptionResponse[]>(
      "pokemon-descriptions",
      {
        filters: {
          name: {
            $eq: name.toLowerCase(),
          },
        },
      }
    );

    return data?.length > 0 ? data[0] : undefined;
  } catch (err) {
    console.error("Can't retrieve information from stripe");
  }
};
