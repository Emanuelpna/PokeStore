import React, { useState, useContext, FormEvent, useEffect } from "react";

import { PageContext } from "../../contexts/PageContext";
import { PokemonContext } from "../../contexts/PokemonContext";

import S from "./Search.module.css";

const Search = () => {
  const { getPokemonOrTypeBySearch } = useContext(PokemonContext);
  const { page } = useContext(PageContext);

  const [search, setSearch] = useState("");

  const searchPokemonOrType = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    getPokemonOrTypeBySearch(search, page);
  };

  useEffect(() => {
    if (search) {
      searchPokemonOrType();
    }
  }, [page]);

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
      <button type="submit" className={S.SearchButton}>
        Buscar
      </button>
    </form>
  );
};

export default Search;
