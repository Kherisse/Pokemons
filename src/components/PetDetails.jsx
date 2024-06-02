import { useEffect, useState } from "react";
import { useDataStore } from "../context/DataStoreContext";

export default function PetDetails() {
  const { selectedPokemon } = useDataStore();
  const [petData, setPetData] = useState(null);

  const URL = `https://pokeapi.co/api/v2/pokemon/`;
  const petNumber = petData?.id;
  const formattedId = String(petNumber).padStart(3, "0");
  const defaultImageUrl =
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png";

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
    // <div className="petDetailsDiv grid sm:col-span-1 md:col-span-3  gap-2 p-10 sm:mx-auto rounded-md">
    <div className="petDetailsDiv p-10 rounded-md md:col-span-2 sm:col-span-1">
      {/* <div className="mockup-phone border-primary max-h-full w-fit">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-4 max-h-screen overflow-y-auto pt-10"> */}
      <div className="text-center pokemonDetailsContainer max-h-auto">
        <h1 className="text-red text-4xl font-bold ">POKEMON DETAILS</h1>
        <img
          className="h-72 mx-auto mt-5 border-violet-700 rounded-lg"
          src={
            petData
              ? `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${formattedId}.png`
              : defaultImageUrl
          }
          alt=""
        />
        <h1 className="font-bold mt-5 uppercase text-3xl text-yellow-500">
          {petData?.name || "No Pokémon selected"}
        </h1>
        <h1 className="font-bold">POKEMON ID: {petData?.id || "N/A"}</h1>

        <div className="divider"></div>
        <p>
          Height: {petData?.height || "N/A"}
          <span> Weight: {petData?.weight || "N/A"}</span>
        </p>
        <div className="divider"></div>
        <p>
          Type:{" "}
          {petData?.types?.map((typeInfo) => typeInfo.type.name).join(", ") ||
            "N/A"}
        </p>
        <p>
          Abilities:{" "}
          {petData?.abilities
            ?.map((abilityInfo) => abilityInfo.ability.name)
            .join(", ") || "N/A"}
        </p>
        <p>Stats:</p>
        <ul>
          {petData?.stats?.length > 0
            ? petData.stats.map((statInfo) => (
                <li key={statInfo.stat.name}>
                  {statInfo.stat.name}: {statInfo.base_stat}
                </li>
              ))
            : "N/A"}
        </ul>
        <p>Moves:</p>
        <ul>
          {petData?.moves?.length > 0
            ? petData.moves
                .slice(0, 5)
                .map((moveInfo) => (
                  <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
                ))
            : "N/A"}
        </ul>
        <p>Species: {petData?.species?.name || "N/A"}</p>
        <p>Forms:</p>
        <ul>
          {petData?.forms?.length > 0
            ? petData.forms.map((formInfo) => (
                <li key={formInfo.name}>{formInfo.name}</li>
              ))
            : "N/A"}
        </ul>
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
}
