# Redux

Redux store 是应用程序状态的唯一真实来源

## 三个基本概念

* State 也就是store， 一般是一个纯JS object
* Action 也是一个Object，用于描述发生的动作
* Reducer 则是一个函数，接收state，和 Action，作为参数，通过计算得到新的state

## Redux 的设计思想很简单，就两句话

* Web 应用是一个状态机，视图与状态是一一对应的
* 所有的状态，保存在一个对象里面。


## action

要想更新 state， 需要发起一个action

action： 

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

## subscribe 订阅器

添加一个变化监听器。每当 dispatch action 的时候就会执行

```js
function select(state) {
  return state.some.deep.property
}

let currentValue
function handleChange() {
  let previousValue = currentValue
  currentValue = select(store.getState())

  if (previousValue !== currentValue) {
    console.log(
      'Some deep nested property changed from',
      previousValue,
      'to',
      currentValue
    )
  }
}

const unsubscribe = store.subscribe(handleChange)
unsubscribe()
```

## combineReducers

随着应用变得越来越复杂，可以考虑将 reducer 函数 拆分成多个单独的函数，
拆分后的每个函数负责独立管理 state 的一部分。

```js
export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})
```


## 异步 Action

异步 Action 并不是一个具体的概念，而可以把它看作是 Redux 的一个使用模式


```js
import { createStore, applyMiddleware } from 'redux' 
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'


const composedEnhancer = applyMiddleware(thunkMiddleware) 
const store = createStore(rootReducer, composedEnhancer);


function fetchData() {
    return (dispatch, getState) => {
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
### 两点需要注意

1. createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware就是第三个参数了。

initial_state 为初始state

```js
const store = createStore(
  reducer,
  initial_state,
  applyMiddleware(logger)
);
```

2. 中间件的次序有讲究。

上面代码中，applyMiddleware方法的三个参数，就是三个中间件。有的中间件有次序要求，使用前要查一下文档。比如，logger就一定要放在最后，否则输出结果会不正确

```js
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);
```

### applyMiddlewares

它是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。

所有中间件被放进了一个数组chain，然后嵌套执行，最后执行store.dispatch。
可以看到，中间件内部（middlewareAPI）可以拿到getState和dispatch这两个方法

也就是说强化了dispatch

### 异步操作的基本思路

同步操作只需要发出一个action，异步操作的差别是发出三种action

操作发起时的 Action
操作成功时的 Action
操作失败时的 Action

以向服务器取出数据为例，三种 Action 可以有两种不同的写法。

```js
// 写法一：名称相同，参数不同
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }

// 写法二：名称不同
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```


## 用 Redux 写一个计数器

```js
const INCREMENT = 'INCREMENT'; // 为 increment action types 定义一个常量
const DECREMENT = 'DECREMENT'; // 为 decrement action types 定义一个常量

const counterReducer = (state = 0, action) => {
switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}; // 定义 counter reducer，根据接收到的动作递增或递减 state

const incAction = () => {
  return {
    type: INCREMENT
  }
}; // 为自增运算定义一个动作创建器

const decAction = () => {
  return {
    type: DECREMENT
  }
}; // 为自减运算定义一个动作创建器

const store = Redux.createStore(counterReducer); // 在这里定义 Redux store，传入 reducers
```

## 使用 Provider 连接react和redux

Provider是 React Redux 包装 React 应用的 wrapper 组件， 
它允许访问整个组件树中的 Redux store 及 dispatch（分发）方法。 
Provider 需要两个 props：Redux store 和 App 应用的子组件

```js
import { Provider } from 'react-redux'

<Provider store={store}>
  <App/>
</Provider>
```

## 定义 reducer

```js
// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}
```

## 参考资料

* [Redux 入门教程（二）：中间件与异步操作](https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)

