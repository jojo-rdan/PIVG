import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styles from '../styles/HomePage.module.css'
//Mis accciones
import { getVideogames, filterVideogameByCreated, orderByName, orderByRating, filterByGender, getGenres, filterByYear} from '../actions';

//Componentes
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

export default function HomePage(){
    const dispatch = useDispatch()
    //Llamo a mis estados para los filtros
    const allVideogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) => state.genres)
    const [order, setOrder] = useState('')
    
    //Paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, setVideogamesPerPage] = useState(9);
    const lastGameIndex = currentPage * videogamesPerPage;
    const firstGameIndex = lastGameIndex - videogamesPerPage;
    const currentVideogames = allVideogames.slice(firstGameIndex, lastGameIndex);
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    //En caso de que no me los cargue en la landing, acá de nuevo.
    useEffect(()=>{
        if(!allVideogames.length){
            dispatch(getVideogames())
            dispatch(getGenres())
        }
    }, [])
    //Para cargar todos los juegos en la página
    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames())
    }
    //Filtro de creados y de la api
    function handleFilteredGames(e){
        dispatch(filterVideogameByCreated(e.target.value))
    }
    //Filtro por géneros
    function handleFilteredGenres(e){
        e.preventDefault();
        dispatch(filterByGender(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    //Filtro por año
    function handleFilteredYear(e){
        e.preventDefault();
        dispatch(filterByYear(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    //Filtro de orden alfábetico
    function handleSort(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    //Muy parecido al del alfabético, pero tomando el rating de value
    function handleRating(e){
        e.preventDefault()
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <h1 className={styles.lvlUp}>LvlUp!</h1>
            <Link to='/videogame'>
            <button className={styles.btn}>Crear videojuego</button>
            </Link>
            <br />
            <button className={styles.btn} onClick={e => {handleClick(e)}}>
                Volver a cargar todos los videojuegos
            </button>
            <div>
                <p>Filtrar por...</p>
                <select className={styles.filters} onChange={e => handleSort(e)}>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <select className={styles.filters} onChange={e => handleRating(e)}>
                    <option value="Rasc">Rating Alto</option>
                    <option value="Rdesc">Rating Bajo</option>
                </select>
                <select className={styles.filters} onChange={e => handleFilteredGames(e)}>
                    <option value="api">Desde la Api</option>
                    <option value="created">Desde la base de datos</option>
                </select>
                <select className={styles.filters} onChange={e => handleFilteredYear(e)}>
                    <option value="Yasc">Mas nuevos</option>
                    <option value="Ydesc">Mas viejos</option>
                </select>
                <select className={styles.filters} onChange={e => handleFilteredGenres(e)}>
                    <option value="all">Géneros...</option>
                    {genres?.map((g) => (
                    <option value={g.name}>{g.name}</option>
                    ))}
                </select>
                <p>Buscá tu juego...</p>
                <SearchBar/>
                <Pagination
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginado = {paginado}
                />
                {currentVideogames?.map((e) => {
                    return (
                        <div className={styles.videogamesGrid}>
                            <Link to={"/home/" + e.id}>
                                <Card name={e.name} image={e.image} genres={e.genres} key={e.id}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}