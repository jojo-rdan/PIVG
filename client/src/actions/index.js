import axios from "axios";

export function getVideogames(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/videogames')
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data
        })
    }
}
export function getGenres(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/genres')
        return dispatch({
            type: 'GET_GENRES',
            payload: json.data
        })
    }
}
export function postVideogame(payload){
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/videogame/', payload);
        console.log(json)
        return json
    }
}
export function orderByName(payload){
    return{
        type: 'FILTER_BY_NAME',
        payload
    }
}
export function orderByRating(payload){
    return{
        type: 'FILTER_BY_RATING',
        payload
    }
}
export function getVideogameName(name) {
    return async function (dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type: 'GET_VIDEOGAME_NAME',
                payload: json.data
            })
        } catch(error) {
            console.log(error);
        }
    }
}
export function filterVideogameByCreated(payload){
    return{
        type: 'FILTER_BY_CREATED',
        payload
    }

}
export function gameDetail(id){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/videogame/${id}`);
            return dispatch({
                type: 'GET_VIDEOGAME_DETAIL',
                payload: json.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}
export function filterByGender(payload){
    return async function(dispatch){
        return dispatch({
            type: 'FILTER_BY_GENRES',
            payload
        })
    }
}
export function filterByYear(payload){
    return async function(dispatch){
        return dispatch({
            type: 'FILTER_BY_YEAR',
            payload
        })
    }
}