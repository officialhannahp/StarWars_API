import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Poeple = ({ id }) => {
    const [people, setPeople] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
    });


    useEffect(() => {
        getOnePerson();
    }, [id])

    const getOnePerson = () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => setPeople(response.data))
        .catch(err => console.log(err));
    }

    
    let content = (
        <>
            <h2>{people.name}</h2>
            <br/>
            <h3>Height: {people.height}cm</h3>
            <h3>Mass: {people.mass}kg</h3>
            <h3>Hair Color: {people.hair_color}</h3>
            <h3>Skin Color: {people.skin_color}</h3>   
        </>
    )

    return (
        <div>
            {content}
        </div>
    )
}

export default Poeple
