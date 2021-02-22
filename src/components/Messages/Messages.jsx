import { connect } from 'react-redux'
import s from './Messages.module.css'
import { changeOffIsProfile, changeLocalMessage } from '../../redux/actions'
import Message from './Message/Message'

const Messages = props => {

    props.changeOffIsProfile()
    if (props.messages.length === 0) {
        props.loadMessagesData()
    }
    console.log(props.messages);

    const prevent = (e) => {
        e.preventDefault()
    }

    const changeInput = (e) => {
        props.changeLocalMessage(e.target.value)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.messages}>
                {props.messages.map(msg => {
                    return <Message id={msg.id} message={msg.message}/>
                })}
            </div>
            <form onSubmit={prevent} className={s.inputs}>
                <input onChange={changeInput} value={props.localMessage} type="text"/>
                <button>Send</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        localMessage: state.messages.localMessage,
        messages: state.messages.messages
    }
}

const mapDispatchToProps = {
    changeOffIsProfile,
    changeLocalMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)