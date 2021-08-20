import React from 'react';
import {Link} from 'react-router-dom';
import {getVideogames} from '../actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from '../styles/LandingPage.module.css'

export default function LandingPage(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames())
    }, [])
    
    return (
        <div>
            <h1 className={styles.h1}>Bienvenido a LvlUp!</h1>
            <p className={styles.p}>Juegos de otro nivel!</p>
            <Link to='/home'>
                <button className={styles.btn}>Entra ya!</button>
            </Link>
        </div>
    )
}