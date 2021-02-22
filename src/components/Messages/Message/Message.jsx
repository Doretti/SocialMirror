import { connect } from 'react-redux'
import s from './Message.module.css'

const Message = (props) => {
    console.log(props.myId);
    console.log(props.id);
    return (
        <div className={props.myId === props.id ? s.message + ' ' + s.myMessage : s.message}>
            {props.message}
        </div>
    )
}

const mapStateToProps = state => {
    return {
            myId: state.login.id
    }
}

export default connect(mapStateToProps, null)(Message)