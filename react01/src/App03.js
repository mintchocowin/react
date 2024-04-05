import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef();
  console.didMountRef = useRef(false);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("count 업데이트!");
    }
    const handleChangeText = (e) => {
      console.log(e.target.value);
    };
  });
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);
  return (
    <div className="App">
      <h1> Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
