import { useSelector } from "react-redux";

const Grandbox = () => {
  const count = useSelector((state) => state.count);
  return <div>Grandbox{count}</div>;
};

export default Grandbox;


