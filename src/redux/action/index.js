import movieApi from '../../apis'
import { GET_MOVIE_FAIL, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from '../constants'

export const getMovies = () =>   async (dispatch) => {
    dispatch({type: GET_MOVIE_REQUEST})
    await movieApi.get(`trending/movie/day`)
    .then(res => {
        dispatch({type: GET_MOVIE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: GET_MOVIE_FAIL, payload: err.message})
    })
}