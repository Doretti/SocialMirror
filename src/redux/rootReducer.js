import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import ProfileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    profile: ProfileReducer
})

export default rootReducer