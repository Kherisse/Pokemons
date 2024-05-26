import React, { useEffect, useState } from "react";

const Search = ({ petData, setPetData }) => {
  const [query, setQuery] = useState("bulbasaur");

  // const URL = "https://pokeapi.co/api/v2/pokemon/";
  const URL = `https://pokeapi.co/api/v2/pokemon/`;

  //SYNTAX OF THE useEffect HOOK
  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`${URL}?query=${query}`);
      const data = await res.json();
      console.log(data.results);
      setPetData(data.results);
    }
    fetchPokemon();
  }, [query]);
  return <></>;
};

export default Search;
