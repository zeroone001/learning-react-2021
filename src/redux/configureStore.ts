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
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import rootReducer from './myReducer';

interface LanguageType {
    language: string
}

/* 处理异步 createAsyncThunk */
// export const getAsyncLanguage = createAsyncThunk(
//     "l/getLanguage",
//     async (userId, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     }
// );




const initialState = {
    language: '中文'
} as LanguageType;

/* 创建reducer  */
export const LanguageSlice = createSlice({
    name: 'l',
    initialState,
    reducers: {
        changeLan(state, action) {
            state.language = action.payload;
        }
    },
    extraReducers: {

    }
})
// 把这个action方法导出去
export const { changeLan } = LanguageSlice.actions;

