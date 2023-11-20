const formatStats = (stats) => {
  const newStats = stats.map(({ stat, base_stat }) => ({
    name: stat.name,
    base_stat,
  }));

  newStats.push({
    name: "total",
    base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc, 0),
  });

  console.log(newStats);
};

const formatTypes = (types) => types.map((type) => type.type.name);

const formatAbilities = (abilities) =>
  abilities.map((ability) => ability.ability.name);

const getPokemonDescription = (pokemonSpecie) =>
  pokemonSpecie.flavor_text_entries[1].flavor_text;

const getEvolutions = (evolutionInfo) => {
  const evolutions = [];
  let evolutionData = evolutionInfo.chain;

  do {
    const evoDetails = evolutionData["evolution_details"][0];

    evolutions.push({
      name: evolutionData.species.name,
      min_level: evoDetails?.min_level ?? 1,
    });

    evolutionData = evolutionData.evolves_to[0];
  } while (evolutionData);

  return evolutions;
};

export {
  formatStats,
  formatTypes,
  formatAbilities,
  getPokemonDescription,
  getEvolutions,
};
