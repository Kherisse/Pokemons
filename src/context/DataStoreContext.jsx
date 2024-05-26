import React, { createContext, useContext } from "react";
import { useState } from "react";

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  return (
    <DataStoreContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
}

export function useDataStore() {
  return useContext(DataStoreContext);
}
