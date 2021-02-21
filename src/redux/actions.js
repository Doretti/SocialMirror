import { LOAD_DATA, LOGIN, LOGIN_CHECK } from "./types"

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