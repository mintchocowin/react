import { useSelector } from "react-redux";
import Grandbox from "./Grandbox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <div>Box{count}</div>
      <Grandbox />
    </div>
  );
};

export default Box;
