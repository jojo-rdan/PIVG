import React from 'react';
import { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postVideogame  } from '../actions';

export function PostVideogame(){
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
}