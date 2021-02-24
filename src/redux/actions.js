import { ADD_MESSAGE, CHANGE_LOCAL_MESSAGE, CHANGE_OFF_IS_PROFILE, LOAD_DATA, LOAD_MESSAGES_DATA, LOGIN, LOGIN_CHECK, REMOVE_MESSAGE } from "./types"

export const login = (login, pass) => {
    return {
        type: LOGIN,
        login,
        pass
    }
}

export const loginCheck = (token) => {
    return {
        type: LOGIN_CHECK,
        token
    }
}

export const loadData = (token) => {
    return {
        type: LOAD_DATA,
        token
    }
}

export const changeOffIsProfile = () => {
    return {
        type: CHANGE_OFF_IS_PROFILE
    }
}

export const changeLocalMessage = (symbol) => {
    return {
        type: CHANGE_LOCAL_MESSAGE,
        symbol
    }
}

export const addMessage = (id) => {
    return {
        type: ADD_MESSAGE,
        id
    }
}

export const removeMessage = (index) => {
    return {
        type: REMOVE_MESSAGE,
        index
    }
}