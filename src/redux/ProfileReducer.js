import db from '../accs.json'
import secret from '../secret.json'
import jwt from 'jsonwebtoken'
import { LOAD_DATA } from './types'

const initialState = {
    name: '',
    disc: '',
    isProfile: false
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            let tokenCheck = jwt.verify(action.token, secret.secret)
            let account = db.filter(acc => acc.login === tokenCheck.login && acc.pass === tokenCheck.pass )[0]
            return {...state, name: account.name, disc: account.disc, isProfile: true}
        default: return state
    }
}

export default ProfileReducer