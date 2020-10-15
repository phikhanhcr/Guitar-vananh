import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import './Login.css'
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userCheck, setUserCheck] = useState("cl-red display")
  const [passCheck, setPassCheck] = useState("cl-red display")
  const [successfulLogin, setSuccessfulLogin] = useState(false)
  const onHandleChangeUser = e => {
    setUsername(e.target.value)
    setUserCheck('cl-red display')
    setPassCheck('cl-red display')
  }
  const onHandleChangePass = e => {
    setPassword(e.target.value)
    setPassCheck('cl-red display')
  }
  const onHandleSubmit = async e => {
    e.preventDefault();
    Axios.post('http://localhost:3000/login', {
      email : username, 
      password : password
    }).then(res => res.data)
    .then(data => {
      if(data.emailNotFound) {
        console.log(data.emailNotFound)
        setUserCheck('cl-red')
        return;
      }
      if(data.wrongPass) {
        console.log(data.wrongPass)
        setPassCheck('cl-red')
        return;
      }
      setSuccessfulLogin(true)
    })
    .catch(err => {
      console.log(err)
    })
  }
  if(successfulLogin) {
    return <Redirect to="/"/>
  }
  return (
    <section className="login">
      <Container className="d-flex justify-content-flex-end">
        <div className="wrapper-login ">
            <a href="/" className="normal-link"> Get Back Home Page</a>
            <p className="s36" style={{marginBottom : 20}}>Đăng Nhập</p>
            <form onSubmit={onHandleSubmit}>
              <p className={userCheck}>* User doesn't exist</p>
              <input
                type="email"
                placeholder="Username"
                value={username}
                name="username"
                onChange={onHandleChangeUser}
                required
              />
              <p className={passCheck}>* Wrong Password</p>
              <input
                type="password"
                value={password}
                placeholder="Password"
                name="password"
                onChange={onHandleChangePass}
                required
              />
              <div className="d-flex justify-content-center">
              <button className="mt-15">Login</button>
              </div>
              
              <div className=" w-100 s14 d-flex justify-content-space-between">
                <a href="#" className="cl-white">Forgot Password?</a>
                <a href="#" className="normal-link">Login with SMS</a>
              </div>

            </form>

        </div>
      </Container>
    </section>
  );
}

export default Login;