import { connect } from 'react-redux'
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
            
    }
}

export default connect(mapStateToProps, null)(Message)