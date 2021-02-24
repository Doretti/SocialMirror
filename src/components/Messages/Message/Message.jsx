import { connect } from 'react-redux'
import s from './Message.module.css'
import { removeMessage } from '../../../redux/actions'

const Message = (props) => {

    const remove = () => {
        props.removeMessage(props.index)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.messageWrapper}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt={props.name} title={props.name}/>
                </div>
                <div className={s.message}>{props.message}</div>
            </div>
            {props.id === props.myId ?
            <div className={s.modifyMessage}>
                <div className={s.edit}>edit</div>
                <div onClick={remove} className={s.delete}>delete</div>
            </div>
            :
            null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        myId: state.login.id
    }
}

const mapDispatchToProps = {
    removeMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)