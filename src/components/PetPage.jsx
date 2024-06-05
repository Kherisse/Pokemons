import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PetPage() {
  const { id, name } = useParams();
  const [petData, setPetData] = useState(null);

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(URL);
      const data = await res.json();
      setPetData(data);
    }
    fetchPokemon();
  }, [id]);

  return (
    <div className="petDetailsDiv grid sm-col-span-1 md:col-span-3 w-full sm:grid-cols-1 gap-2 p-10 sm:mx-auto rounded-md bg-indigo-800 bg-opacity-50">
      <div className="mockup-phone border-primary max-h-">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-4 max-h-screen overflow-y-auto pt-10">
            <div className="text-center pokemonDetailsContainer max-h-auto">
              <h1 className="text-red text-4xl font-bold mt-20">
                POKEMON DETAILS
              </h1>
              <img
                className="h-72 mx-auto mt-5 border-violet-700 rounded-lg"
                src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${id}.png`}
                alt={name}
              />
              <h1 className="font-bold mt-5 uppercase text-3xl text-yellow-500">
                {petData?.name || "N/A"}
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
                {petData
                  ? petData.types
                      .map((typeInfo) => (
                        <span
                          key={typeInfo.type.name}
                          className={`${
                            typeInfo.type.name === "grass"
                              ? "text-green-500"
                              : typeInfo.type.name === "fire"
                              ? "text-red-500"
                              : typeInfo.type.name === "poison"
                              ? "text-purple-300"
                              : typeInfo.type.name === "bug"
                              ? "text-amber-400"
                              : typeInfo.type.name === "water"
                              ? "text-blue-500"
                              : typeInfo.type.name === "flying"
                              ? "text-cyan-400"
                              : typeInfo.type.name === "electric"
                              ? "text-green-500"
                              : "text-white"
                          }`}
                        >
                          {typeInfo.type.name}
                        </span>
                      ))
                      .reduce((prev, curr) => [prev, " | ", curr])
                  : "N/A"}
              </p>
              <p>
                Abilities:{" "}
                {petData
                  ? petData.abilities
                      .map((abilityInfo) => abilityInfo.ability.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>Stats:</p>
              <ul>
                {petData
                  ? petData.stats.map((statInfo) => (
                      <li key={statInfo.stat.name}>
                        {statInfo.stat.name}: {statInfo.base_stat}
                      </li>
                    ))
                  : "N/A"}
              </ul>
              <p>Moves:</p>
              <ul>
                {petData
                  ? petData.moves
                      .slice(0, 5)
                      .map((moveInfo) => (
                        <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
                      ))
                  : "N/A"}
              </ul>
              <p>Species: {petData?.species.name || "N/A"}</p>
              <p>Forms:</p>
              <ul>
                {petData
                  ? petData.forms.map((formInfo) => (
                      <li key={formInfo.name}>{formInfo.name}</li>
                    ))
                  : "N/A"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
