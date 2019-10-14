import { createStore,  combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import SearchReducer from "./reducers/SearchReducer";

const store = createStore(SearchReducer,applyMiddleware(thunk));

export default store;
