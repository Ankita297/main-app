import {createStore} from "redux";
import allReducers from "../reducers/allReducer";

const mainStore=createStore(allReducers);

export default mainStore