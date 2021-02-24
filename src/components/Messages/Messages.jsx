import { connect } from 'react-redux'
import s from './Messages.module.css'
import { changeOffIsProfile, changeLocalMessage, addMessage } from '../../redux/actions'
import Message from './Message/Message'

const Messages = props => {

    props.changeOffIsProfile()

    const changeInput = (e) => {
        props.changeLocalMessage(e.target.value)
    }

    const addMessage = (e) => {
        e.preventDefault()
        props.addMessage(props.id)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.messages}>
                {props.messages.map((msg, index) => {
                    return <Message index={index} name={msg.name} avatar={msg.avatar} id={msg.id} message={msg.message}/>
                })}
            </div>
            <form onSubmit={addMessage} className={s.inputs}>
                <input onChange={changeInput} value={props.localMessage} type="text"/>
                <button>Send</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        localMessage: state.messages.localMessage,
        messages: state.messages.messages,
        id: state.login.id
    }
}

const mapDispatchToProps = {
    changeOffIsProfile,
    changeLocalMessage,
    addMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)