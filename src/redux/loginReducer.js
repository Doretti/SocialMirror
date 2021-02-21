import { LOGIN, LOGIN_CHECK } from "./types";

import db from '../accs.json'
import secret from '../secret.json'
import jwt from 'jsonwebtoken'

const initialState = {
    token: undefined,
    auth: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            let account = db.filter(acc => acc.login === action.login && acc.pass === action.pass )
            let token
            if (account.length > 0) {
                token = jwt.sign(account[0], secret.secret)
                localStorage.setItem('token', token)
                return {...state, token: token, auth: true}
            }
            window.alertMessage('Неверный логин или пароль')
            return state

        case LOGIN_CHECK:
            let tokenCheck = jwt.verify(action.token, secret.secret)
            let accountCheck = db.filter(acc => acc.login === tokenCheck.login && acc.pass === tokenCheck.pass )
            if (accountCheck[0]) {
                return {...state, auth: true}
            }
            return state

    
        default: return state
    }
}

export default loginReducer