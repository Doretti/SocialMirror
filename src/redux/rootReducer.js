import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    profile: ProfileReducer,
    messages: MessagesReducer,
})

export default rootReducer