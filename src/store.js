import {createStore, applyMiddleware} from "redux";
import user from "./reducers/userReducer";
import promise from "redux-promise-middleware";

export default createStore(user,{},applyMiddleware(promise()));
