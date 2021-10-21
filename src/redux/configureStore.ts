// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './myReducer';

// export default function configureStore(preloadedState) {
//     const middlewares = [thunkMiddleware]
//     const middlewareEnhancer = applyMiddleware(...middlewares)
  
//     // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//     // const composedEnhancers = composeWithDevTools(...enhancers)
  
//     const store = createStore(rootReducer, preloadedState, middlewareEnhancer)
  
//     return store
// }
import { configureStore, createSlice } from '@reduxjs/toolkit';
// import rootReducer from './myReducer';

interface LanguageType {
    language: string
}

const initialState = {
    language: '中文'
} as LanguageType;

const LanguageSlice = createSlice({
    name: 'l',
    initialState,
    reducers: {
        changeLan(state, action) {
            state.language = action.payload;
        }
    }
})

export const {changeLan} = LanguageSlice.actions;


const store = configureStore({
    reducer: LanguageSlice.reducer,
    devTools: true
});

export default store;
