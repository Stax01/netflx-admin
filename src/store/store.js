
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import listReducer from './list/listReducer';
import movieReducer from './movie/movieReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
    list: listReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))