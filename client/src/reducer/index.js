
const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    details: {}
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case 'GET_VIDEOGAME_NAME':
            return{
                ...state,
                videogames: action.payload
            }
        case 'FILTER_BY_CREATED':
            let filteredApi = [...state.allVideogames].filter(
                (r) => typeof r.id === "number"
              )
            let filteredDb = [...state.allVideogames].filter(
                (r) => typeof r.id !== "number"
              )
            return{
                ...state,
                videogames: action.payload === "created" ? filteredDb : filteredApi
            }
        case 'POST_VIDEOGAME':
            return{
                ...state
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        case 'FILTER_BY_GENRES':
            let filterGenres = [...state.genres]
            return {
                ...state,
                videogames: filterGenres === 'all' ? state.allVideogames : state.allVideogames.filter((r) =>
                r.genres.includes(action.payload)
              )
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
        case 'FILTER_BY_RATING':
            let sortGamesRating = action.payload === 'Rdesc' ?
            state.videogames.sort(function (a, b){
                if(a.rating > b.rating){
                    return 1;
                }
                if(b.rating > a.rating){
                    return -1;
                }
                return 0
            }) :
            state.videogames.sort(function (a, b){
                if(a.rating > b.rating){
                    return -1;
                }
                if(b.rating > a.rating){
                    return 1;
                }
                return 0
            })
            return {
                ...state,
                videogames: sortGamesRating
            }
        case 'FILTER_BY_YEAR':
            let sortGamesYear = action.payload === 'Ydesc' ?
            state.videogames.sort(function (a, b){
                if(Number(a.released.split('-')[0]) > Number(b.released.split('-')[0])){
                    return 1;
                }
                if(Number(b.released.split('-')[0]) > Number(a.released.split('-')[0])){
                    return -1;
                }
                return 0
                }) :
                state.videogames.sort(function (a, b){
                    if(Number(a.released.split('-')[0]) > Number(b.released.split('-')[0])){
                        return -1;
                    }
                    if(Number(b.released.split('-')[0]) > Number(a.released.split('-')[0])){
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                videogames: sortGamesYear
            }
        case 'GET_VIDEOGAME_DETAIL':
            return{
                ...state,
                details: action.payload
            }
        default: {
            return state;
        }
    }
}

export default rootReducer;