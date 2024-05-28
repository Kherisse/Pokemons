// import React from "react";
import PetItem from "./PetItem";

export default function PetList({ petData }) {
  return (
    <div className="grid col-span-1 p-3 sm:p-1 gap-2 mb-2 bg-indigo-500/20 sm:mx-auto rounded-md min-h-screen max-h-screen overflow-y-auto">
      {petData.map((pet) => (
        <PetItem key={pet.name} pet={pet} />
      ))}
    </div>
  );
}
