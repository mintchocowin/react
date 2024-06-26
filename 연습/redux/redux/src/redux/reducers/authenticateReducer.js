// const initialState = {
//   id: "",
//   password: "",
//   authenticate: false,
// };

// const authenticateReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         id: payload.id,
//         password: payload.password,
//         authenticate: true,
//       };
//     default:
//       return { ...state };
//   }
// };

// export default authenticateReducer;

const initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateReducr = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default authenticateReducer;
