# Hook

## 什么是hook

Hook 是一些在函数组件里面”钩入“ React state 以及生命周期特性的函数

Hook不能在class组件里面使用

在class里面是不起作用的

##  Effect Hook

```js
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:  useEffect(() => {    // 使用浏览器的 API 更新页面标题    document.title = `You clicked ${count} times`;  });
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

## 使用规则

只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用

只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。















