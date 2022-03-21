const postReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL POSTS":
      return payload;
    default:
      return state;
  }
};

export default postReducer;
