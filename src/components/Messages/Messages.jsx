import { connect } from 'react-redux'
import s from './Messages.module.css'
import { changeOffIsProfile } from '../../redux/actions'

const Messages = props => {

    props.changeOffIsProfile()

    const prevent = (e) => {
        e.preventDefault()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.messages}></div>
            <form onSubmit={prevent} className={s.inputs}>
                <input type="text"/>
                <button>Send</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    changeOffIsProfile
}

export default connect(null, mapDispatchToProps)(Messages)