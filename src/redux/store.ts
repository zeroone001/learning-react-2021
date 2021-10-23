import { createStore } from 'redux';
import myReducer from './myReducer';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { LanguageSlice } from "./configureStore";
import { actionLog } from "./middleware/actionLog";

// const store = createStore(myReducer);

const store = configureStore({
    reducer: LanguageSlice.reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
    // enhancers
    // preloadedState
    devTools: true
});

export default store; 

