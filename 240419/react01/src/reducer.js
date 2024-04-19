const initialState = { count: 0, id: "", password: "" };

const reducer = (state = initialState, action) => {
  // console.log(action);
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + action.payload.num };
  // } else if (action.type === "LOGIN") {
  // }
  // return { ...state };

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
};

export default reducer;
