import api from "./api";
import CharizardMock from "./CharizardMock";
import PokemonListMock from "./PokemonListMock";

type PokemonListAPI = {
  name: string;
  url: string;
};

class PokeApi {
  constructor(
    public pokemonsPerPage: number = 6,
    public pokemonByType: any[] = []
  ) {}

  private _getOffsetPagination(page: number) {
    return this.pokemonsPerPage * (page - 1);
  }

  public getPokeIDFromURL(pokemonUrl: string) {
    return Number(pokemonUrl.split("/")[6]);
  }

  public async getPokemonList(page: number = 1): Promise<PokemonListAPI[]> {
    try {
      const offsetResults = this._getOffsetPagination(page);

      const result = await this._callApi(
        `pokemon?offset=${offsetResults}&limit=${this.pokemonsPerPage}`,
        "list"
      );

      return result.results;
    } catch (error) {
      throw error;
    }
  }

  public async getPokemonByID(pokeID: number) {
    try {
      const result = await this._callApi(`/pokemon/${pokeID}`);

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getTypeList() {
    try {
      const result = await this._callApi(`type`);

      return result.results;
    } catch (error) {
      throw error;
    }
  }

  public async getTypePokemon(typeName: string, typeID?: number) {
    try {
      this.pokemonByType = [];

      const result = await this._callApi(`type/${typeID ? typeID : typeName}`);

      console.log(result);

      this.pokemonByType = result.pokemon;

      return this.getPokemonListByType(1);
    } catch (error) {
      throw error;
    }
  }

  public getPokemonListByType(page: number = 1) {
    console.log(this);
    if (this.pokemonByType.length === 0) return [];

    const offsetResults = this._getOffsetPagination(page);

    const newList = this.pokemonByType.filter(
      (_, index) =>
        index + 1 <= this.pokemonsPerPage * page && index + 1 >= offsetResults
    );

    return newList;
  }

  private async _callApi(
    endpoint: string,
    mock: "list" | "pokemon" = "pokemon"
  ) {
    try {
      // const response = await api.get(`${endpoint}`);
      // return response.data;

      /** Puxando o mock para evitar excesso de requisições na PokeAPI durante o hot reload */
      return await JSON.parse(
        mock === "list" ? PokemonListMock : CharizardMock
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new PokeApi(6, []);
