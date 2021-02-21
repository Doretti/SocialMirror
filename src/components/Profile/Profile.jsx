import { connect } from 'react-redux'
import s from './Profile.module.css'
import { loadData } from '../../redux/actions'

const Profile = (props) => {

    const token = localStorage.getItem('token')
    props.loadData(token)

    return (
        <div className={s.wrapper}>
            <div className={s.image}>
                <img src="https://i.kym-cdn.com/photos/images/facebook/001/411/258/c1e.jpg" alt=""/>
            </div>
            <div className={s.nameAndDisc}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.disc}>
                    {props.disc}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.profile.name,
        disc: state.profile.disc
    }
}

const mapDispatchToProps = {
    loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)