import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import  movieReducer  from './Reducers/movieReducer.js'

const reducers = combineReducers({ 
    movieReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store