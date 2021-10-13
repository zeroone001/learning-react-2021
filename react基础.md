# 基础

 ## 给 `setState` 传递一个对象与传递一个函数的区别是什么？



传递一个函数可以让你在函数内访问到当前的 state 的值。因为 `setState` 的调用是分批的，所以你可以链式地进行更新，并确保它们是一个建立在另一个之上的，这样才不会发生冲突

## `setState` 什么时候是异步的？

目前，在事件处理函数内部的 `setState` 是异步的。

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

## 高阶组件



## 深入 JSX

实际上，JSX 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖