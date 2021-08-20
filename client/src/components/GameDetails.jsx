import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {gameDetail} from '../actions';

import styles from '../styles/GameDetails.module.css'

export default function GameDetails(props){
    //console.log(props.match.params.id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(gameDetail(props.match.params.id))
    }, [dispatch])
    const myGame = useSelector((state) => state.details)
    //console.log(myGame)
    if(props.match.params.id != myGame.id){
        return <h1>Cargando...</h1>
    } else {
    return(
        <div className={styles.detailsContainer}>
            {myGame ?
            <div className={`${styles.col} ${styles.vgDetails} ${styles.text}`}>
                <h1 className={styles.firstItem}>{myGame.name}</h1>
                <img className={`${styles.col} ${styles.vgImage}`} src={myGame.image ? myGame.image : myGame.background_image} alt="Error cargando imagen"/>
                <p><strong>Descripción: </strong>{myGame.description}</p>
                <h4><strong>Géneros: </strong>{!myGame.createdInDb ? myGame.genres?.join('-') : myGame.genres.map(el => el.name + (' '))}</h4>
                <h4><strong>Fecha de lanzamiento: </strong>{myGame.released}</h4>
                <h4><strong>Rating: </strong>{myGame.rating}</h4>
                <h4><strong>Plataformas: </strong> {myGame.platforms + (' ')}</h4>
            </div>
            : <p>Cargando...</p>
        }
        <Link to='/home'>
            <div className={styles.detailsContainer}>
            <button className={`${styles.btn} ${styles.moveBtn}`}>Volver</button>
            </div>
        </Link>
        </div>
    )
    }
}