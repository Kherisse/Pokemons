// import React from "react";
import PetItem from "./PetItem";

export default function PetList({ petData, setPetId }) {
  return (
    // <div className="col-span-1 grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-2 p-5 bg-indigo-500/20 sm:mx-auto rounded-md">
    <div className="grid col-span-1 p-3 sm:p-1 gap-2 mb-2 bg-indigo-500/20 sm:mx-auto rounded-md">
      {petData.map((pet) => (
        <PetItem setPetId={setPetId} key={pet.name} pet={pet} />
      ))}
    </div>
  );
}
