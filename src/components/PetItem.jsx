// import React from "react";

import { useDataStore } from "../context/DataStoreContext";

export default function PetItem({ pet }) {
  const { setSelectedPokemon } = useDataStore();
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-auto hover:scale-110 max-w-46">
      <figure>
        <img
          className="mx-auto h-full"
          src={`https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/${pet.name}.png`}
          alt=""
        />
      </figure>
      <div className="card-body sm:p-3 md:p-5">
        <p className="card-title text-center text-sm uppercase text-wrap">
          {pet.name}
        </p>

        <div className="card-actions justify-end">
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
  );
}
