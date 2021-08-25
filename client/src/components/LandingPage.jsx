import React from 'react';
import {Link} from 'react-router-dom';
import {getVideogames, getGenres} from '../actions';
import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min'

import styles from '../styles/LandingPage.module.css'

export default function LandingPage(){
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames())
        dispatch(getGenres())
        if(!vantaEffect){
            setVantaEffect(HALO({
                el: myRef.current
            }))
        }
        return () =>{
            if(vantaEffect) vantaEffect.destroy()
        }
    }, [dispatch, vantaEffect])
    
    return (
        <div ref={myRef} className={styles.divVanta}>
            <h1 className={styles.h1}>Bienvenido a LvlUp!</h1>
            <p className={styles.p}>Juegos de otro nivel!</p>
            <Link to='/home'>
                <button className={styles.btn}>Entra ya!</button>
            </Link>
        </div>
    )
}