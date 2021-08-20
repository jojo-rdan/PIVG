import React from 'react';
import styles from '../styles/Pagination.module.css'

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pageNumbers = []
    for(var i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li key={number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}