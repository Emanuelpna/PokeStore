import React, { ReactElement } from "react";

import api from "../services/api";
import CharizardMock from "../services/CharizardMock";

export interface IPokemon {
  name: string;
  price: number;
  isShiny: boolean;
  sprites: Array<string>;
}

export const PokemonContext = React.createContext({
  getAllPokemon: () => {},
});

interface IPokemonProps {
  children: ReactElement;
}

export interface IPokemonContext {
    getAllPokemon(page?: number) : Promise<IPokemon[]>;
}

const PokemonContextProvider: React.FC<IPokemonProps> = ({ children }) => {
  const checkIfShiny = () => {
    const min = 0;
    const max = 100;
    const random = Math.random() * (max - min) + min;

    return random < 10 ? true : false;
  };

  const preparePokemon = (pokemonInfos: any): IPokemon => {
    const isShiny = checkIfShiny();

    const { name, sprites } = pokemonInfos;

    const shinyModifier = isShiny ? "shiny" : "default";

    const backSprite = sprites[`back_${shinyModifier}`];
    const frontSprite = sprites[`front_${shinyModifier}`];

    return { name, price: 1900, isShiny, sprites: [frontSprite, backSprite] };
  };

  const getPokemon = async (pokeID: number) => {
    try {
      // const response = await api.get(`pokemon/${pokeID}`);
      // return response.data;
      return JSON.parse(CharizardMock);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPokemon = async (page: number = 1) => {
    const pokemon = [1, 2, 3, 4, 5, 6].map((pokeID) => getPokemon(pokeID));

    const pokemonInfos = await Promise.all([...pokemon]);

    return pokemonInfos.map((pokemonInfo) => preparePokemon(pokemonInfo));
  };

  return (
    <PokemonContext.Provider value={{ getAllPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
