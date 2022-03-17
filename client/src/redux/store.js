//ПОДКЛЮЧЕНИЕ НАШЕГО РУТ РЕДЮСЕРА КОТОРЫЙ ОТВЕЧАЕТ ЗА ВСЕХ
import rootReducer from './reducers/rootReducer'

import {createStore,applyMiddleware} from 'redux'; // ПОДКЛЮЧИТЬ ЭПЛАЙМИДЛВАРУ И САНКИ К 16 СТРОКЕ СМОТРИ

//Это для Санок 
import thunk from 'redux-thunk';


//composeWithDevTools ПОДКЛЮЧАЕМ НАШ ДЕВТУЛС К ПРОЕКТУ
import { composeWithDevTools } from '@redux-devtools/extension';




// //ПОДКЛЮЧЕНИЕ LOCAL STORAGE   LET STORE ДОЛЖЕН БЫТЬ ОБЯЗАТЕЛЬНО МЕЖДУ  persistedState И store.subscribe(() 
// ///////////////////////////////////////////////////////////////////////////////////////////
// const persistedState = localStorage.getItem("reduxState") // 2. Распарсиваем
// ? JSON.parse(localStorage.getItem("reduxState"))
// : {};


//CreateStore Создание стора где лежит наш РЕДЮСЕР который отвечает за ВСЕХ!
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))           //persistedState Положить рядом с РУТРЕДЮСЕРОМ ДЛЯ ЛОКАЛ СТОРАДЖ


// store.subscribe(() => { // 1. Подписываемся и закидываем данные в localStorage
//    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });
// /////////////////////////////////////////////////////////////////////////////////////////////////////




export default store; // ЭКСПОРТ 






