const postReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL POSTS":
      return payload;
    case "ADD POST":
      return [payload, ...state];

    case "SET_STATUS":
      return payload;
      
    default:
      return state;
  }
};

export default postReducer;
