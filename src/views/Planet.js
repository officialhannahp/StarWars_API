import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Planet = ({ id }) => {
    const [planet, setPlanet] = useState({
        name: "",
        climate: "",
        surface_water: "",
        population: "",
    });


    useEffect(() => {
        getOnePlanet();
    }, [id])

    const getOnePlanet = () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => setPlanet(response.data))
        .catch(err => console.log(err));
    }

    let content = (
        <>
            <h2>{planet.name}</h2>
            <br/>
            <h3>Climate: {planet.climate}cm</h3>
            <h3>Surface Water: {planet.surface_water}kg</h3>
            <h3>Poopulation: {planet.population}</h3>
        </>
    )

    return (
        <div>
            {content}
        </div>
    )
}

export default Planet
