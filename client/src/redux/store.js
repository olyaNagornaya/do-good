import rootReducer from './reducers/rootReducer'
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const persistedState = localStorage.getItem("reduxState")
? JSON.parse(localStorage.getItem("reduxState"))
: {};

let store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(sagaMiddleware,thunk)))


store.subscribe(() => {
   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

sagaMiddleware.run(rootSaga);
export default store;






