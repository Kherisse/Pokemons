import { useEffect, useState } from "react";
import { useDataStore } from "../context/DataStoreContext";

export default function PetDetails() {
  const { selectedPokemon } = useDataStore();
  const [petData, setPetData] = useState(null);

  const URL = `https://pokeapi.co/api/v2/pokemon/`;
  const petNumber = petData?.id;
  const formattedId = String(petNumber).padStart(3, "0");

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
    <div className="petDetailsDiv grid sm:col-span-1 md:col-span-3  gap-2 p-10 sm:mx-auto rounded-md w-fit">
      <div className="mockup-phone border-primary max-h-full w-fit">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-4 max-h-screen overflow-y-auto pt-10">
            <div className="text-center pokemonDetailsContainer max-h-auto">
              <h1 className="text-red text-4xl font-bold mt-40">
                POKEMON DETAILS
              </h1>
              <img
                className="h-72 mx-auto mt-5 border-violet-700 rounded-lg"
                src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${formattedId}.png`}
                alt=""
              />
              <h1 className="font-bold mt-5 uppercase text-3xl text-yellow-500">
                {petData?.name}
              </h1>
              <h1 className="font-bold">POKEMON ID: {petData?.id}</h1>

              <div className="divider"></div>
              <p>
                Height: {petData?.height}
                <span> Weight: {petData?.weight}</span>
              </p>
              <div className="divider"></div>
              <p>
                Type:{" "}
                {petData?.types
                  ?.map((typeInfo) => typeInfo.type.name)
                  .join(", ")}
              </p>
              <p>
                Abilities:{" "}
                {petData?.abilities
                  ?.map((abilityInfo) => abilityInfo.ability.name)
                  .join(", ")}
              </p>
              <p>Stats:</p>
              <ul>
                {petData?.stats?.map((statInfo) => (
                  <li key={statInfo.stat.name}>
                    {statInfo.stat.name}: {statInfo.base_stat}
                  </li>
                ))}
              </ul>
              <p>Moves:</p>
              <ul>
                {petData?.moves?.slice(0, 5).map((moveInfo) => (
                  <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
                ))}
              </ul>
              <p>Species: {petData?.species?.name}</p>
              <p>Forms:</p>
              <ul>
                {petData?.forms?.map((formInfo) => (
                  <li key={formInfo.name}>{formInfo.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
