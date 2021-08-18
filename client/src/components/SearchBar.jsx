import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { getVideogameName } from '../actions';

export default function SearchBar (){
    const dispatch = useDispatch()
    const [game, setGame] = useState("")

    const handleInputChange = (e)=>{
        e.preventDefault()
        setGame(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(getVideogameName(game))
    }
    return(
        <div>
            <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => handleInputChange(e)}
            />
            <button onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )

}