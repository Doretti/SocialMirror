import { connect } from 'react-redux'
import s from './Login.module.css'
import { login, loginCheck } from '../../redux/actions'
import { createRef } from 'react'
import { Redirect } from 'react-router-dom'

const Login = props => {

    window.alertMessage = (msg) => {
        const wrapper = document.querySelector('body')
        const alert = document.createElement('div')
        alert.classList.add(s.alert)
        alert.textContent = msg
        wrapper.appendChild(alert)
        setTimeout(() => {
            alert.classList.add(s.activeAlert)
            setTimeout(() => {
                alert.classList.add(s.remove)
                setTimeout(() => {
                    alert.classList.remove(s.remove)
                    alert.classList.remove(s.activeAlert)
                    alert.classList.remove(s.alert)
                    alert.remove()
                }, 1000)
            }, 1000)
        }, 0)
    }

    const token = localStorage.getItem('token')

    if (token) {
        props.loginCheck(token)
    }
    if (props.auth) {
        return <Redirect to='/'/>
    }

    const loginRef = createRef()
    const passRef = createRef()

    const login = (e) => {
        props.login(loginRef.current.value, passRef.current.value)
        e.preventDefault()
    }


    return (
        <div className={s.wrapper}>
            <div className={s.win}>
                <div className={s.title}>Вход</div>
                <div className={s.forms}>
                    <form onSubmit={login} className={s.login}>
                        <input ref={loginRef} type="text" className={s.input} placeholder='Login'/>
                    </form>
                    <form onSubmit={login} className={s.pass}>
                        <input ref={passRef} type="pass" className={s.input} placeholder='Password'/>
                    </form>
                </div>
                <button onClick={login} className={s.loginBtn}>
                    Авторизоваться
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.login.auth
    }
}

const mapDispatchToProps = {
    login,
    loginCheck
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)