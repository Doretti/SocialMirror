import { NavLink } from 'react-router-dom'
import s from './SideBar.module.css'

const SideBar = props => {
    return (
        <div className={props.isProfile ? s.sidebar + ' ' + s.profile : s.sidebar}>
            <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
            <NavLink activeClassName={s.active} to='/messages'>Messages</NavLink>            
        </div>
    )
}

export default SideBar