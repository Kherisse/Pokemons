import React from "react";

const PetDisplay = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2">
        <div className="bg-gray-500 hover:bg-white rounded-sm w-full h-full">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/pikachu.png"
                alt="Shoes"
                className="rounded-xl w-52"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">See Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDisplay;
