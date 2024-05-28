// import React from "react";
import PetItem from "./PetItem";

export default function PetList({ petData }) {
  return (
    <>
      <div className="grid sm-col-span-1 md:col-span-1 p-3 sm:p-1 gap-2 mb-2 bg-indigo-500/20 sm:mx-auto rounded-md min-h-screen max-h-screen overflow-y-auto w-fit sm:min-h-80">
        <h1 className="text-center text-yellow-400 font-bold p-2 border-b-2 block">
          POKEMONS:
        </h1>
        {petData.map((pet) => (
          <PetItem key={pet.name} pet={pet} />
        ))}
      </div>
    </>
  );
}
