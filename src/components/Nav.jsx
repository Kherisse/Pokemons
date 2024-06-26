import React from "react";
import { useDataStore } from "../context/DataStoreContext";

const Nav = () => {
  const { setSelectedPokemon } = useDataStore();

  return (
    <div>
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-40">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img
              className="h-11"
              src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex-2 gap-">
          <div className="form-control">
            <input
              onChange={(e) => setSelectedPokemon(e.target.value)}
              type="text"
              placeholder="Enter Pokemon name.."
              className="input input-bordered w-50 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/pikachu.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
