import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loginCheck } from './redux/actions'
import Login from "./components/Login/Login"
import Main from './components/Main/Main'
import './App.css';

function App(props) {

  let token = localStorage.getItem('token')

  if (token) {
      props.loginCheck(token)
  }

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.login.auth
  }
}

const mapDispatchToProps = {
  loginCheck
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
