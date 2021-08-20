import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { getVideogameName } from '../actions';

import style from '../styles/SearchBar.module.css'

export default function SearchBar (){
    const dispatch = useDispatch()
    const [game, setGame] = useState("")

    const handleInputChange = (e)=>{
        e.preventDefault();
        setGame(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getVideogameName(game))
        setGame("")
    }
    return(
        <div>
            <input
            className={style.input}
            type="text"
            placeholder="Buscar"
            onChange={(e) => handleInputChange(e)}
            />
            <button className={style.search} onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )

}