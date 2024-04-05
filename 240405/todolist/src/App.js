import "./App.css";
import React, { useReducer, useRef, useCallback, useMemo } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

//context

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();
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

//mockup data

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "헬스장 런닝머신 고고",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "코인노래방 노래연습",
    createDate: new Date().getTime(),
  },
];

function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  // console.log(idRef);

  const onCreate = (content) => {
    // const newItem = {
    //   id: idRef.current,
    //   isDone: false,
    //   content,
    //   createDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  // setTodo(
  //   todo.map((it) =>
  //     it.id === targetId ? { ...it, isDone: !it.isDone } : it
  //   )
  // );

  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((it) => it.id !== targetId));

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);
  const memoizeddispathes = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizeddispathes}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
