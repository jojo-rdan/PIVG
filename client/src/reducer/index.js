
const initialState = {
    videogames: []
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload
            }
        case 'FILTER_BY_CREATED_OR_NOT':
            const allVideogames = state.videogames;
            const filteredVG = action.payload ===
            return{

            }
        default: {
            return state;
        }
    }
}

export default rootReducer;