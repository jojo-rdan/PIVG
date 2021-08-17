
const initialState = {
    videogames: [],
    allVideogames: []
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case 'FILTER_BY_CREATED':
            const filteredVG = action.payload === "created" ? state.allVideogames.filter(el => el.createdInDb) : state.allVideogames.filter(el => !el.createdInDb)
            return{
                ...state,
                videogames: action.payload === "all" ? state.allVideogames : filteredVG
            }
        case 'GET_VIDEOGAME_NAME':
            return{
                ...state,
                videogames: action.payload
            }
        case 'FILTER_BY_NAME':
            let sortGames = action.payload === 'asc' ?
                state.videogames.sort(function (a, b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0
                }) :
                state.videogames.sort(function (a, b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                videogames: sortGames
            }
        default: {
            return state;
        }
    }
}

export default rootReducer;