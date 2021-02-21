import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Messages from '../Messages/Messages'
import Profile from '../Profile/Profile'
import SideBar from '../SideBar/SideBar'
import s from './Main.module.css'

const Main = props => {

    if (!props.auth) {
        return <Redirect to='/login'/>
    }

    return (
        <div className={props.isProfile ? s.main + ' ' + s.profile : s.main}>
            <SideBar isProfile={props.isProfile} />
            <div className={s.content}>
                <Switch>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/messages'>
                        <Messages />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.login.auth,
        isProfile: state.profile.isProfile
    }
}

export default connect(mapStateToProps,null)(Main)