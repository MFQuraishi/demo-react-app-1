import './App.css';
import React, { useState } from "react";

function Component(props) {
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  const [count, setCount] = useState(0);
  return (
    <>
        <br/>
        <div className="box">
            <div>
            <h3>Hello from {props.name} {count}</h3>
            </div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    </>
  );
}

export default Component;
