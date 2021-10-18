import React, { createRef, ReactElement, useState, useEffect } from "react";
// css module css in js
import styles from "./index.module.scss";
import Robot from "./components/Robot";
import tsConfig from "./assets/images/tsConfig.jpg";
import ShoppingCart from "./components/ShoppingCart";

function Example() {
  const [count, setCount] = useState<number>(0);
  const [showLoading, setLoading] = useState<boolean>(false);
  // 相当于 componentDidMount 和 componentDidUpdate:
  // 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);

  // 这里一定要带上第二个参数，否则，会一直在请求
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await res.json();
      console.log("jsonData", jsonData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const _obj = {
    id: "123",
    name: "robot",
  };

  return (
    <div>
      { !showLoading ? (
        <div>
          <ShoppingCart></ShoppingCart>
          <p className={styles.clicked} id={styles.clicked}>
            You clicked {count} times
          </p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <Robot {..._obj} />
          <img src={tsConfig} alt="123" />
        </div>
      ) : (
        <h2>loading.....</h2>
      ) }
    </div>
  );
}

export default Example;
