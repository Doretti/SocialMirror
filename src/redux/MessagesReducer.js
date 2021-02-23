import { ADD_MESSAGE, CHANGE_LOCAL_MESSAGE } from "./types"
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

        case ADD_MESSAGE:

            if (!state.localMessage) {
                return state
            }

            let sender = accs.filter(acc => acc.id === action.id)[0]
            let firstName = sender.name.split(' ')[0]

            return {...state, messages: state.messages.concat({
                message: state.localMessage,
                id: action.id,
                avatar: sender.avatar,
                name: firstName
            }), localMessage: ''}

        default: return state
    }
}

export default MessagesReducer