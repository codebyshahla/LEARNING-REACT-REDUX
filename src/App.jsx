import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state) => {
    // console.log(state)
    return state.counter;
  });
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
      {count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
    </>
  );
}

export default App;
