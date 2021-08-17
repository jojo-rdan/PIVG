import React from 'react';

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pageNumbers = []
    for(var i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li key={number}>
                    <a href onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}