import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getVideogames } from '../actions';
import Card from './Card';

export default function HomePage(){
    const dispatch = useDispatch()

    const allVideogames = useSelector((state) => state.videogames)

    useEffect (() => {
        dispatch(getVideogames())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames())
    }

    return (
        <div>
            <Link to='/videogame'>Create videogame</Link>
            <h1>LvlUp!</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los personajes
            </button>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select>
                    <option value="">Todos</option>
                    <option value="">Existentes</option>
                    <option value="">Creados</option>
                </select>
                {allVideogames?.map((e) => {
                    return (
                        <fragment>
                            <Link to={"/home/" + e.id}>
                                <Card name={e.name} image={e.image} genres={e.genres} key={e.id}/>
                            </Link>
                        </fragment>
                    )
                })}
            </div>
        </div>
    )
}