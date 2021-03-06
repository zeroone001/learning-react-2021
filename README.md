# react

```shell
npx create-react-app my-app --template typescript
npm i typescript-plugin-css-modules --save-dev
npm i react-router-dom --save
```


## css

1. 直接引入css文件 `import './style.css'` ; 可能会造成CSS的全局污染和冲突
2. css in js 模块化引入组件 `import style from './index.css'`； 麻烦一点 `npm i typescript-plugin-css-modules -D`



 ## 给 `setState` 传递一个对象与传递一个函数的区别是什么？


传递一个函数可以让你在函数内访问到当前的 state 的值。因为 `setState` 的调用是分批的，所以你可以链式地进行更新，并确保它们是一个建立在另一个之上的，这样才不会发生冲突

## `setState` 什么时候是异步的？

目前，在事件处理函数内部的 `setState` 是异步的。

setState 本身并非是异步的，但是对state的处理，给人一种异步的假象。state的处理一般发生在生命周期变化的时候 

## 代码分割

当 Webpack 解析到该语法时，会自动进行代码分割

```js
import { add } from './math';

console.log(add(16, 26));
```

```js
import('./math').then(math => {
    console.log(math.add(16, 26));
})
```

## 基础class

```js
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // 在这里添加 handleChange() 和 submitMessage() 方法
  handleChange (e) {
      this.setState({
        input: e.target.value
    });
  }
  submitMessage = () => {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: '',
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* 在这一行下面渲染一个输入框（input），按钮（button）和列表（ul） */ }
        <input onChange={this.handleChange} type="text" value={this.state.input} />
        <button onClick={this.submitMessage}>添加</button>
        <ul>
          {this.state.messages.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```
## 高阶组件



## 深入 JSX

JSX 的本质就是，动态创建组件的语法糖

实际上，JSX 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖


JSX本身也是表达式

`const element = <h1>hello world</h1>;`



## 属性展开

```js
function App2 () {
    const props = {fName: 'liu', lName: 'yongsheng'}
    return <Greeting {...props} />
}
// 相当于
function APP1 () {
    return <Greeting fName="liu" lName="yongsheng" />
}
```

## refs

不能在函数组件上使用ref，只能在class组件上

```jsx
class MyComponent extends React.Component {
    constructor (props) {
        super(props);
        this.myRef = React.createRef();
    }
    render () {
        return <div ref={this.myRef}></div>
    }
}
```

## dangerouslySetInnerHTML  === v-html

```js
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

## 生命周期

挂载

```js
constructor
static getDerivedStateFromProps()
render()
componentDidMount() //
```

更新

```js
static getDerivedStateFromProps()
shouldComponentUpdate() //
render()
getSnapshotBeforeUpdate()
componentDidUpdate() // 
```

卸载

```js
componentWillUnmount()
```

## hook

在不编写class的情况下，使用state等其他的特性

官方文档： https://zh-hans.reactjs.org/docs/hooks-effect.html

### useState

```js
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

### useEffect

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```


## AJAX and APIs

在 componentDidMount 这个生命周期函数中发起 AJAX 请求。这样做你可以拿到 AJAX 请求返回的数据并通过 setState 来更新组件





## Context API  与 useContext 【全局数据传递】】

```jsx
const color = {
    dark: "1",
    light: '2'
}
const ThemContext = React.createContext(color)

function App () {
    return (
        <ThemContext.Provider value={color}></ThemContext.Provider>
    )
}

function App3 () {
    const color = useContext(ThemeContext);
    return (
    	<div>{color.dark}</div>
    )
}

```




## 高阶组件 HOC

高阶组件是，参数是组件，返回值是新组件的函数

不是react的API，而是一种设计模式

1. 抽取重复的代码，实现组件的复用
2. 条件渲染，控制组件的渲染逻辑（渲染劫持）

`const EnhancedComponent = HocComponent(wrappedCpmponent);`


## 设计模式

* 高阶组件 HOC
* 函数子组件 `this.props.children(value)`
## 自定义hook


自定义hook是一个函数，其名称是以use开头，函数内部可以调用其他的HOOK



## react-router 路由 与 SPA

`npm i react-router-dom --save`

为什么需要路由？

1. 单页应用也需要页面切换
2. 通过URL可以定位到页面
3. 更有语义的组织资源 

三种路由实现方式

1. URL路由
2. hash路由
3. 内存路由

```html

<Link to="/fap" />

<NavLink to="/faq" activeClassName="selected " />


```


## redux

```shell
npm i redux --save
npm i react-redux --save
npm install @reduxjs/toolkit
npm install --save-dev redux-devtools
npm i redux-thunk --save
```

react-redux: 是官方软件包，它允许您的React组件通过读取状态片段和调度操作来更新存储，从而与Redux存储交互。


### reducer 小例子

```js
const initState = {
    value: 0
};

function counterReducer (state = initState, action) {
    if (action.type === 'counter/increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    return state;
}
```

### dispatch

```js
// 触发一个事件
store.dispatch({type: 'counter/increment'});
// 一般写成一个函数
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
```

### selector

Selector 函数可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑


## redux 异步处理

* redux-thunk
* redux-promise
* redux-saga

## redux 中间件

公式

```js
const actionLog: Middleware = (store) => (next) => (action) => {}
```


## 显示HTML

```html
<div dangerouslySetInnerHTML={{ __html: this_html }}></div>

```

## redux-toolkit

这个依赖里面包含了 `redux , redux-thunk`


### 异步 redux-toolkit



## 不可变数据 immutable data

如何操作不可变数据

* {...}
* `Object.assign()`
* immer, redux-toolkit里面就用到了immer

## class




# 复杂状态处理


## 原则一， 保证状态最小化


**在保证 State 完整性的同时，也要保证它的最小 化**


## 原则二，避免中间状态，确保唯一数据源

## 资料

* [官网](https://zh-hans.reactjs.org/docs/hello-world.html)
* [create-react-app](https://www.html.cn/create-react-app/docs/folder-structure/)
* [styled-components](https://github.com/styled-components/styled-components)
* [ant-design](https://ant.design/index-cn)
* [react-router](https://reactrouter.com/web/guides/quick-start)
* [redux 中文网](http://cn.redux.js.org/)
* [redux-toolkit.js](https://redux-toolkit.js.org/usage/usage-guide)
* [新的react官网](https://beta.reactjs.org/learn)
