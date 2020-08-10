/*
 Stores will be configured here
*/
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {
    signInReducer,
} from './reducers/sample.reducer';

const reducer = combineReducers({
    signIn: signInReducer,
});

const initialState = {

};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
