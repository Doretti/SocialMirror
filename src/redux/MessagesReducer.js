import { CHANGE_LOCAL_MESSAGE } from "./types"
import accs from '../accs.json'
import messages from '../messages.json'

const initialState = {
    localMessage: '',
    messages: messages
}

const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_LOCAL_MESSAGE:
            return {...state, localMessage: action.symbol}

        default: return state
    }
}

export default MessagesReducer