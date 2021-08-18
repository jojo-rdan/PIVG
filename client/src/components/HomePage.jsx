import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

//Mis accciones
import { getVideogames, filterVideogameByCreated, orderByName} from '../actions';

//Componentes
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

export default function HomePage(){
    const dispatch = useDispatch()

    const allVideogames = useSelector((state) => state.videogames)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, setVideogamesPerPage] = useState(9);
    const lastGameIndex = currentPage * videogamesPerPage;
    const firstGameIndex = lastGameIndex - videogamesPerPage;
    const currentVideogames = allVideogames.slice(firstGameIndex, lastGameIndex);

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect (() => {
        dispatch(getVideogames())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames())
    }

    function handleFilteredGames(e){
        dispatch(filterVideogameByCreated(e.target.value))
    }

    function handleSort(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <Link to='/videogame'>Crear videojuego</Link>
            <h1>LvlUp!</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los videojuegos
            </button>
            <div>
                <select onChange={e => handleSort(e)}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select onChange={e => handleFilteredGames(e)}>
                    <option value="all">Todos</option>
                    <option value="api">De la Api</option>
                    <option value="created">Creados</option>
                </select>
                <SearchBar/>
                <Pagination
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginado = {paginado}
                />
                {currentVideogames?.map((e) => {
                    return (
                        <div>
                            <Link to={"/home/"}>
                                <Card name={e.name} image={e.image} genres={e.genres}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}