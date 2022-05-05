import {
    applyMiddleware,
    combineReducers,
} from "redux";

import ThunkMiddleware from 'redux-thunk';
import sheetsReducer from "./sheets-reducer";
import { configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers({
    
    sheets: sheetsReducer
})

let store = configureStore({reducer: reducers}, applyMiddleware(ThunkMiddleware));
export default store;

window.store = store
