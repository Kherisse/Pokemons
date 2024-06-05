import { useEffect, useState } from "react";
import { useDataStore } from "../context/DataStoreContext";

export default function Sample({ pet }) {
  const { setSelectedPokemon } = useDataStore();
  const { selectedPokemon } = useDataStore();
  const [petData, setPetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const petNumber = petData?.id;
  const formattedId = String(petNumber).padStart(3, "0");

  const URL = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`${URL}${pet.name}`);
      const data = await res.json();
      console.log(data);
      setPetData(data);
    }
    fetchPokemon();
  }, [selectedPokemon]);

  return (
    <>
      <div class="grid-cols-2 max-w-sm text-white border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 md:min-w-36 md:max-w-36 sm:min-w-36 sm:max-w-36 xs:max-w-36 sm:pb-2 sm:snap-mandatory sm:snap-x ">
        <div class="flex flex-col items-center pb-5 p-5  sm:snap-center">
          <img
            class="w-24 h-24 mb-3 shadow-lg"
            src={`https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/${pet.name}.png`}
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-white">{pet.name}</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            #{formattedId}
          </span>
          <p>
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

          <div class="flex mt-4 md:mt-6">
            <button
              onClick={() => {
                setSelectedPokemon(pet.name);
                console.log(pet.name);
              }}
              className="btn btn-primary btn-xs"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
