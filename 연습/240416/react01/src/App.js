import "./App.css";
import React, { useReducer, useRef, useCallback, useMemo } from "react";
import Header from "./componet/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

//context
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

//mockup data
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "운동하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "제시간에 자기",
    createDate: new Date().getTime(),
  },
];

//state function

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};
function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {};
  const onUpdate = () => {};
  const onDelete = () => {};
  const momoizedDispathes = () => {};
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={momoizedDispathes}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
