import {combineReducers} from "redux";
import counter from '../actions/counter';

const counterApp=combineReducers({
    counter
})

export default counterApp;