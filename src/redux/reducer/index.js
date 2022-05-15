import { GET_MOVIE_FAIL, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "../constants";

const movieReducer = (state = {movies: [], loading: true, error: null}, action) => {
    switch(action.type) {
        case GET_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case GET_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return {
                ...state,
                loading: false
            }
    }
}

export default movieReducer;