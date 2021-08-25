import React from 'react';
import styles from '../styles/Card.module.css'
import {IoGameControllerOutline} from 'react-icons/io5'

export default function Card ({name, image, genres}){
    return (
        <div className={styles.vgCard}>
            <h5><IoGameControllerOutline/> {name}</h5>
            <h5>{genres.join(' - ')}</h5>
            <img width={250} height={250} className={styles.vgImage} src={image} alt="La imagen no se encuentra"/>
        </div>
    )
}