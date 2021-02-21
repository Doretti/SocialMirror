import db from '../accs.json'
import secret from '../secret.json'
import jwt from 'jsonwebtoken'
import { CHANGE_OFF_IS_PROFILE, LOAD_DATA } from './types'

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
        case CHANGE_OFF_IS_PROFILE:
            return {...state, isProfile: false}
        default: return state
    }
}

export default ProfileReducer