import { createStore } from 'redux';
import myReducer from './myReducer';

const store = createStore(myReducer);

export default store; 

