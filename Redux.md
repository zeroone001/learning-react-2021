# Redux

## 三个基本概念



* State 也就是store， 一般是一个纯JS object
* Action 也是一个Object，用于描述发生的动作
* Reducer 则是一个函数，接收state，和 Action，作为参数，通过计算得到新的state

## 异步 Action

```js
import { createStore, applyMiddleware } from 'redux' 
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'


const composedEnhancer = applyMiddleware(thunkMiddleware) 
const store = createStore(rootReducer, composedEnhancer);


function fetchData() {
    return dispatch => {
        	dispatch({ type: 'FETCH_DATA_BEGIN' }); 
        fetch('/some-url').then(res => {
        	dispatch({ type: 'FETCH_DATA_SUCCESS', data: res });
        }).catch(err => {
        	dispatch({ type: 'FETCH_DATA_FAILURE', error: err }); 
        })
    }
}




import fetchData from './fetchData';
import { useDispatch } from 'react-redux';

function DataList() {
	const dispatch = useDispatch();
	// dispatch 了一个函数由 redux-thunk 中间件去执行 
    dispatch(fetchData());
}
```

异步 Action 并不是一个具体的概念，而可以把它看作是 Redux 的一个使用模式