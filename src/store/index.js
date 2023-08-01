import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import rootReducer from "./reducers";

let middleware = applyMiddleware(promiseMiddleware, thunk, createLogger());

let persistantStore = {};

export default createStore(rootReducer, persistantStore, middleware);
