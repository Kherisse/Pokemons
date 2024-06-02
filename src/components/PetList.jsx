// import React from "react";
import PetItem from "./PetItem";
import Sample from "./Sample";

export default function PetList({ petData }) {
  return (
    <>
      {/* <div className="grid sm-col-span-1 md:col-span-1 p-3 sm:p-1 gap-2 mb-2 sm:mx-auto rounded-md min-h-screen max-h-screen overflow-y-auto w-fit sm:min-h-48"> */}
      {/* <div className="grid col-span-7 p-3 sm:p-1 gap-2 mb-2 mx-auto rounded-md max-h-screen overflow-y-auto w-fit sm:min-h-48"> */}
      <div className="p-3 sm:p-2 gap-2 mb-2 mx-auto rounded-md md:max-h-screen overflow-y-auto w-fit sm:max-h-80 col-span-1 border-2 border-gray-600">
        <h1 className="text-center text-yellow-400 font-bold p-2 border-b-2 ">
          POKEMONS:
        </h1>
        <div className="mb-50 p-2 flex flex-wrap">
          {petData.map((pet) => (
            // <PetItem key={pet.name} pet={pet} />
            <Sample key={pet.name} pet={pet} />
          ))}
        </div>
      </div>
      {/* {petData.map((pet) => (
        <Sample key={pet.name} pet={pet} />
      ))}{" "} */}
    </>
  );
}
