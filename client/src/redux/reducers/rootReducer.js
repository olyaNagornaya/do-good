import registerReducer from "./registerReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  register: registerReducer,
  post: postReducer,
});

export default rootReducer;
