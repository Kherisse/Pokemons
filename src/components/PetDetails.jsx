import { useEffect, useState } from "react";
import { useDataStore } from "../context/DataStoreContext";

export default function PetDetails() {
  const { selectedPokemon } = useDataStore();
  const [petData, setPetData] = useState(null);

  const URL = `https://pokeapi.co/api/v2/pokemon/`;

  //SYNTAX OF THE useEffect HOOK
  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`${URL}${selectedPokemon}`);
      const data = await res.json();
      console.log(data);
      setPetData(data);
    }
    fetchPokemon();
  }, [selectedPokemon]);

  return (
    // <div className="col-span-1  grid w-full sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 p-10 bg-sky-500/100 sm:mx-auto rounded-md ">
    <div className="grid col-span-3 w-full sm:grid-cols-1 gap-2 p-10 sm:mx-auto rounded-md bg-indigo-800 bg-opacity-50">
      <div>
        <h1 className="underline">POKEMON DETAILSsss</h1>
        <img src={petData?.sprites?.front_default} alt="" />
        <h1>{petData?.name}</h1>
        <h1>{petData?.id}</h1>
      </div>
    </div>
  );
}
