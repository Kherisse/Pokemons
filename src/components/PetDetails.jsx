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
    <div className="petDetailsDiv grid sm-col-span-1 md:col-span-3 w-full sm:grid-cols-1 gap-2 p-10 sm:mx-auto rounded-md bg-indigo-800 bg-opacity-50  ">
      <div className="mockup-phone border-primary ">
        <div className="camera"></div>
        <div className="display ">
          <div className="artboard artboard-demo phone-1 max-h-screen overflow-y-auto pt-10 ">
            <div className="text-center pokemonDetailsContainer">
              <h1 className="text-red text-4xl font-bold">POKEMON DETAILS</h1>
              <img
                className="h-72 mx-auto mt-5 border-violet-700 rounded-lg border-2"
                src={petData?.sprites?.front_default}
                alt=""
              />
              <h1 className="font-bold mt-5 uppercase">{petData?.name}</h1>
              <h1>POKEMON ID: {petData?.id}</h1>
              <div className="divider"></div>
              <h1>Weight: {petData?.weight}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
