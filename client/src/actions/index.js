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
export function filterVideogameByCreatedOrNot(payload){
    return{
        type: 'FILTER_BY_CREATED_OR_NOT',
        payload
    }

}