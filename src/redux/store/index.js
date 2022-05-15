import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import movieReducer from '../reducer'

const rootReducer = combineReducers({
    movies: movieReducer
})

// const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;