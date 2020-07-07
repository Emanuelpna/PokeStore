import React, { useState, FormEvent } from "react";

import S from "./Search.module.css";

import PokeApi from "../../services/PokeApi";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchPokemonOrType = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await PokeApi.doSearch(search);

    console.log(response);
  };

  return (
    <form
      onSubmit={(e) => searchPokemonOrType(e)}
      className={S.SearchContainer}
    >
      <label className={S.SearchLabel} htmlFor="search">
        Encontre aqui os melhores pokemons
      </label>
      <input
        id="search"
        className={S.SearchInput}
        placeholder="Busque por Pokemon ou por Tipo"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className={S.SearchButton}>Buscar</button>
    </form>
  );
};

export default Search;
