import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue, getValue } from "./reduxSlice";
const Display = () => {
  const disp = useDispatch();
  const value = useSelector((state) => state.slice.value);
  const inputValue = useSelector((state) => state.slice.inputValue);

  return (
    <div>
      <div>
        <h1>Practice Session</h1>
        <h2>{`Number Value: ${value}`}</h2>
      </div>

      <div>
        <button
          onClick={() => {
            disp(increment());
          }}
        >
          Increase by 1
        </button>

        <button
          onClick={() => {
            disp(decrement());
          }}
        >
          Decrease by 1
        </button>
      </div>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          disp(getValue(e.target.value));
        }}
      />

      <button
        onClick={() => {
          disp(incrementByValue());
        }}
      >
        Increment by Input Value
      </button>
    </div>
  );
};

export default Display;
