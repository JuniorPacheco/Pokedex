import { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);

  const showPokemonById = () => {
    setShowDetailPokemon(true);
  };

  const closePokemonDetail = () => {
    setShowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon,
        showPokemonById,
        closePokemonDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
