import {
    applyMiddleware,
    combineReducers,
} from "redux";

import ThunkMiddleware from 'redux-thunk';
import sheetsReducer from "./reducers/sheets-reducer";
import { configureStore } from '@reduxjs/toolkit'
import filterManagerReducer from "./reducers/current-manager-reducer";

// const customizedMiddleware = getDefaultMiddleware ({
//     serializableCheck: false
//   })
const reducers = combineReducers({
    
    sheets: sheetsReducer,
    currentManager: filterManagerReducer
})

// let store = configureStore({reducer: reducers}, applyMiddleware(ThunkMiddleware));

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: ThunkMiddleware,
        serializableCheck: false,
      }),
  })

  export default store;
window.store = store
