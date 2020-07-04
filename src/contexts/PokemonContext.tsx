import React, { ReactElement } from "react";

import api from "../services/api";
import Utils from "../services/Utils";
import PokeApi from "../services/PokeApi";
import CharizardMock from "../services/CharizardMock";
import PokemonListMock from "../services/PokemonListMock";

import { IPokemon, IPokemonInfoAPI, IPokemonContext } from "./Pokemon";

interface IPokemonProps {
  children: ReactElement;
}

export const PokemonContext = React.createContext<IPokemonContext>({} as IPokemonContext);

const PokemonContextProvider: React.FC<IPokemonProps> = ({ children }) => {
  const checkIfShiny = () => {
    const min = 0;
    const max = 100;
    const random = Math.random() * (max - min) + min;

    return random < 25 ? true : false;
  };

  const getPrice = (height: number, weight: number): number => {
    return height * weight;
  };

  // Se for shiny, recebe 50% de desconto
  const getPriceWithShinyDiscount = (price: number): number => {
    return price * 0.5;
  };

  const preparePokemon = (pokemonInfos: IPokemonInfoAPI): IPokemon => {
    const isShiny = checkIfShiny();

    const { id, name, sprites, types, height, weight } = pokemonInfos;

    const backSprite = isShiny ? sprites.back_shiny : sprites.back_default;
    const frontSprite = isShiny ? sprites.front_shiny : sprites.front_default;

    const finalTypes = types.map(({ type }) => type.name);

    const initialPrice = getPrice(height, weight);

    const discount = isShiny ? getPriceWithShinyDiscount(initialPrice) : 0;

    return {
      id,
      name,
      discount,
      price: initialPrice - discount,
      isShiny,
      sprites: [frontSprite, backSprite],
      types: finalTypes,
    };
  };

  const getAllPokemon = async (page: number = 45) => {
    const pokemonList = await PokeApi.getPokemonList(page);

    const pokemon = pokemonList.map((pokemon) =>
      PokeApi.getPokemonByID(PokeApi.getPokeIDFromURL(pokemon.url))
    );

    const pokemonInfos = await Promise.all([...pokemon]);

    return pokemonInfos.map((pokemonInfo) => preparePokemon(pokemonInfo));
  };

  const getPokemonByType = async (type: string = "fire", page: number = 1) => {
    await PokeApi.getTypePokemon(type);

    const types = PokeApi.getPokemonListByType(page).map((pokemonList: any) =>
      PokeApi.getPokemonByID(PokeApi.getPokeIDFromURL(pokemonList.pokemon.url))
    );

    const pokemonInfos = await Promise.all([...types]);

    return pokemonInfos.map((pokemonInfo) => preparePokemon(pokemonInfo));
  };

  return (
    <PokemonContext.Provider
      value={{
        getAllPokemon,
        getPokemonByType,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
