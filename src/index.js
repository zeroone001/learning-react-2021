import React, { createRef, ReactElement, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function Example () {
  const [count, setCount] = useState(0);
  // // 相当于 componentDidMount 和 componentDidUpdate:
  // 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
  useEffect(() => {
    document.title = `${count} times`;
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

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);