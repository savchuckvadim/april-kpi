import {
    applyMiddleware,
    combineReducers,
} from "redux";

import ThunkMiddleware from 'redux-thunk';
import sheetsReducer from "./reducers/sheets-reducer";
import { configureStore } from '@reduxjs/toolkit'
import filterManagerReducer from "./reducers/current-manager-reducer";

const reducers = combineReducers({
    
    sheets: sheetsReducer,
    currentManager: filterManagerReducer
})

let store = configureStore({reducer: reducers}, applyMiddleware(ThunkMiddleware));
export default store;

window.store = store
