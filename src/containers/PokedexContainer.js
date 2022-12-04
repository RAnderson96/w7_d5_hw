import React, { useState, useEffect } from "react";
import PokemonResult from "../components/PokemonResult";
import "./PokedexContainer.css"
const PokedexContainer = function () {
    const [searchedPokemon, setSearchedPokemon] = useState("");
    const [pokemon, setPokemon] = useState([]);
    const [type, setType] = useState();
    const [img, setImg] = useState();
    const [abilities, setAbilities] = useState([]);
    const [search, setSearch] = useState("");
    const [text, setText] = useState("");
    const [searched, setSearched] = useState(false);


    useEffect(() => {
        fetchPokemonList();
    }, [text, abilities]);

    const fetchPokemonList = () => {
        // let url = "https://pokeapi.co/api/v2/pokemon/pikachu"
        let url = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`
        fetch(url)
            .then(res => res.json())
            .then(poke => setPokemon(poke))
            .catch(err => console.error);
        // let url = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`
        fetch(url)
            .then(res => res.json())
            .then(poke => poke["sprites"]["front_default"])
            .then(pokeImg => setImg(pokeImg))
            .catch(err => console.error);

        fetch(url)
            .then(res => res.json())
            .then(poke => poke["types"][0]["type"]["name"])
            .then(pokeType => setType(pokeType))
            .catch(err => console.error);

        fetch(url)
            .then(res => res.json())
            .then(poke => poke["abilities"])
            .then(pokeType => setAbilities(pokeType))
            .catch(err => console.error);

        setSearched(true);
        

        // gatherPokemonInfo()


    }

    // const gatherPokemonInfo = () => {
    //     const abiltiesMapped = abilities.map((ability, index)=> {
    //         return (ability)
    //     })
    //     console.log(abiltiesMapped)
    // }


    const handleFormSubmit = (event) => {
        event.preventDefault()
        const pokemonToSearch = text.toLowerCase()
        setSearchedPokemon(pokemonToSearch);
        fetchPokemonList()

        setText("")

    };

    const handleTextChange = (event) => {
        setText(event.target.value)
        setSearched(false)

    }


    return (
        <div>
            <img src='/image.png'></img>
            
            <div>
                <p>Search a pokemon</p>
                <form className="search-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder="Enter name of Pokemon"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <input type="submit" value="Search"></input>
                </form>
                <div>
                    { searchedPokemon != "" ? <PokemonResult img={img} type={type} pokemon={pokemon} abilities={abilities} searched ={searched}/> : null

                    }

                </div>

            </div>



        </div>
    )

}

export default PokedexContainer;