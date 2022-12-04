import React from "react";
// import AbilityListResult from "./AbilityListResult";
const PokemonResult = ({ pokemon, img, type, abilities, searched }) => {

    const getAbilities = () => {
        abilities.map((ability) => {
            return (ability[0]["name"])
        })
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    
    
    let pName = String(pokemon.name);
    let upperCasePname = capitalizeFirstLetter(pName);
    let pType = String(type);
    let upperCasePtype = capitalizeFirstLetter(pType);

    const pokeName = `Pokemon Species: ${upperCasePname}`;
    const pokeType = `Pokemon Type: ${upperCasePtype}`;
    const altText = `Picture of ${upperCasePname}`;
    const pokeHeight = `Pokemon Height: ${pokemon.height}m`;

    return (
        <div>

            <div>
                <img src={img} alt={altText}></img>
            </div>
            <div>
                {pokeName}
            </div>
            <div>
                {pokeType}
            </div>
            <div>
                {pokeHeight}
            </div>
            


            <div>
                <h5>Abilities</h5>
                <ol>
                    {abilities ? abilities.map((row, index) => {
                        return (
                                <li key={index}>
                                    {capitalizeFirstLetter(String(row["ability"]["name"]))}
                                </li>
                        )
                    }) : null}
                   
                </ol>
            </div>
        </div>
    )
}

export default PokemonResult;
