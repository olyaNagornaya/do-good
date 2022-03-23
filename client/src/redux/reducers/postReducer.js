const postReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL POSTS":
      return payload;
    case "ADD POST":
      return [payload, ...state];
    default:
      return state;
  }
};

export default postReducer;
