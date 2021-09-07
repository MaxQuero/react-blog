import articlesReducer from "./articles/articlesReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    articlesReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;