import React, { createRef, ReactElement, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// css module css in js
import styles from './index.module.scss';
import Robot from './components/Robot';
import tsConfig from './assets/images/tsConfig.jpg';
import ShoppingCart from './components/ShoppingCart';

function Example () {
  const [count, setCount] = useState<number>(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  // 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);
  const _obj = {
    id: '123',
    name: 'robot'
  }
  

  return (
    <div>
      <ShoppingCart></ShoppingCart>
      <p className={styles.clicked} id={styles.clicked}>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Robot {..._obj} />
      <img src={tsConfig} />
    </div>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);