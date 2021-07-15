import React, { useState } from 'react'
import { navigate } from '@reach/router';


const SearchBar = props => {
    const [formState, setFormState] = useState({
        category: "people",
        id: ""
    });

    const onSubmit = e => {
        e.preventDefault();
        navigate(`/${formState.category}/${formState.id}`);
        // setFormState({category: "people", id: ""});
    }

    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Search for: </label>
                <select name="category" onChange={onChange}>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>

                <label>ID: </label>
                <input type="text" name="id" onChange={onChange} value={formState.id} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SearchBar
