//import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./RootReducer";
import RootSaga from "./RootSaga";
import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware],
// });

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
