import React from 'react';
import { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postVideogame  } from '../actions';

export default function PostVideogame(){
    const dispatch = useDispatch()
    const history = useHistory()
    const genres = useSelector((state) => state.genres)
    const [input, setInput] = useState({
        name: "",
        background_image: "",
        description: "",
        genres:[],
        released: "",
        rating: "0",
        platforms: ""
    })
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name] :  Array.from(e.target.selectedOptions).map((p) => p.value)
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postVideogame(input))
        alert('Tu videojuego ha sido creado!')
        setInput({
            name: "",
            background_image: "",
            description: "",
            genres:[],
            released: "",
            rating: "",
            platforms: ""
        })
        history.push('/home')
    }
    useEffect(() => {
        dispatch(getGenres())
    }, []);

    return(
        <div>
            <Link to='/home'>
                <button>Volver</button>
            </Link>
            <h1>Crea tu videojuego</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label>Nombre</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    required
                     />
                </div>
                <div>
                    <label>Imagen</label>
                    <input
                    type="text"
                    value={input.background_image}
                    name="background_image"
                    onChange={handleChange}
                     />
                </div>
                <div>
                    <label>Descripción</label>
                    <input
                    type="text"
                    value={input.description}
                    name="description"
                    onChange={handleChange}
                    required
                     />
                </div>
                <div>
                    <label>Fecha de lanzamiento</label>
                    <input
                    type="date"
                    value={input.released}
                    name="released"
                    onChange={handleChange}
                    required
                     />
                </div>
                <div>
                    <label>Rating</label>
                    <input
                    type="text"
                    value={input.rating}
                    name="rating"
                    onChange={handleChange}
                    required
                     />
                </div>
                <div>
                    <label>Plataformas</label>
                    <input
                    type="text"
                    value={input.platforms}
                    name="platforms"
                    onChange={handleChange}
                    required
                     />
                </div>
                <div>
                    <div>Géneros</div>
                    <select
                        name="genres"
                        multiple="multiple"
                        onChange={(e) => handleSelect(e)}
                        required
                        >
                        {genres.map((g) => (
                            <option value={g.id}>{g.name}</option>
                        ))}
                    </select>
                    <div>
                    Mantén presionado CTRL para elegir más de un género.
                    </div>
                </div>
                <button type='submit'>Crear Videojuego</button>
            </form>
        </div>
    )
}