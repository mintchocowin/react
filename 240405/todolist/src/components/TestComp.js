import { useReducer } from "react";
import "./TestComp.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "INIT":
      return 0;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
};

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  //dispath가  객체반환 객체를 받아들임
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>{count}</div>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
