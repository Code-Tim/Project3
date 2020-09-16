import React, { useState } from "react";
import "./Counter.css";

function Counter(props) {

  return (
    <div className= "both-counters">
      <div className= "counter-section">
      <h1>ATTACk</h1>
        <button onClick={props.handleIncrement}>+</button>
        <h2>{props.count}</h2>
        <button onClick={props.handleDecrement}>-</button>
      </div>
      {/* <button onClick={() => setCount(0),setCount2(0)}>Reset</button> */}
      <div className= "counter-section">
      <h1>Defense</h1>
        <button onClick={props.handleIncrement2}>+</button>
        <h2>{props.count2}</h2>
        <button onClick={props.handleDecrement2}>-</button>
      </div>
      
    </div>
  );
}

export default Counter;