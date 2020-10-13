import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import './Login.css'
class Login extends PureComponent {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (!token) {
      loggedIn = false
    }
    this.state = {
      username: '',
      password: '',
      loggedIn,
      checkUser: false,
      checkPass: false
    }
  }

  onChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }
  

  render() {
    const { username, password, loggedIn, checkUser, checkPass } = this.state;
    let classNameUser = 'alert alert-warning display';
    let classNamePass = 'alert alert-warning display';
    if (checkUser) {
      classNameUser = 'alert alert-warning';
    }
    if (checkPass) {
      classNamePass = 'alert alert-warning';
    }
    if (loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="Login">
        <div className="wrapper-login">
          <div className="child-login">
            <h1>Instagram</h1>
            <div className={classNameUser} role="alert">
              Username doesn't exists !!!
            </div>
            <div className={classNamePass} role="alert">
              Oop, Wrong Password !!!
            </div>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}

                onChange={this.onChange}
                required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}

                onChange={this.onChange}
                required />
              <button className="btn btn-primary">Log In</button>
            </form>
            <p>Or</p>
            <div>
              <a href="#">
                Forgot your password
            </a>
            </div>
          </div>
          <div className="sign-in">
            <p>You don't have account </p>
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;