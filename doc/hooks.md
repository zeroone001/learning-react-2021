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



## 需要清除的 effect

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {    
      function handleStatusChange(status) {      
          setIsOnline(status.isOnline);    
      }    
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);    
      // Specify how to clean up after this effect:    
      return function cleanup() {      
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);   
      };
  });
  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```



## useContext



```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);  
    return (  
      <button style={{ background: theme.background, color: theme.foreground }}>      I am styled by theme context!   
        </button> 
);
}
```


## 优点

带来的最大好处，逻辑复用； 简化了逻辑的复用；有助于关注分离

高阶组件HOC的缺点：

1. 代码难理解，不直观，很多人宁愿重复代码，也不愿意去用高阶组件
2. 会增加很多额外的组件节点。给调试带来很大的负担。


 ## Hooks

`useState、useEffect、useCallback、useMemo、 useRef、useContext`


### useEffect

```js
const [size, setSize] = useState({}); useEffect(() => {
// 窗口大小变化事件处理函数 
const handler = () => {
   setSize(getSize());
};
// 监听 resize 事件 
window.addEventListener('resize', handler);
// 返回一个 callback 在组件销毁时调用
 return () => {
    // 移除 resize 事件
    window.removeEventListener('resize', handler); 
  };
}, []);
```

## 规则

1. 所有的hook必须要被执行到
2. 必须按照顺序执行

## eslint-plugin-react-hooks 

检查hooks是否正确使用