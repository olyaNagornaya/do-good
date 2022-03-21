//2 ФАЙЛ 
// ДЛЯ ОБЪЕДЕНЕНИЕ ВСЕХ РОУТЕРОВ
import registerReducer from './registerReducer';

//combineReducers КОМБАЙН СОБИРАЕТ ВСЕ РЕДЬЮСЕРЫ ВМЕСТЕ
import { combineReducers } from "redux"


//combineReducers КОМБАЙН СОБИРАЕТ ВСЕ РЕДЬЮСЕРЫ ВМЕСТЕ
const rootReducer = combineReducers({register:registerReducer})





export default rootReducer;
