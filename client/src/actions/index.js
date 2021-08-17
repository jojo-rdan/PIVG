import axios from "axios";

export function getVideogames(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/videogames',{
            
        })
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data
        })
    }
}
export function orderByName(payload){
    return{
        type: 'FILTER_BY_NAME',
        payload
    }
}
export function getVideogameName(name) {
    return async function (dispatch){
        try{
            let json = axios.get(`http://localhost:3001/videogames?name=${name}`);
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