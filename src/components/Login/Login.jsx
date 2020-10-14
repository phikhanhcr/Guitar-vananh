import React from 'react';
import { useState } from 'react';
import { Container } from 'reactstrap';
import './Login.css'
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onHandleChangeUser = e => {
    setUsername(e.target.value)
  }
  const onHandleChangePass = e => {
    setPassword(e.target.value)
  }
  const onHandleSubmit = e => {
    e.preventDefault();
  }
  return (
    <section className="login">
      <Container className="d-flex justify-content-flex-end">
        <div className="wrapper-login ">
            <a href="/" className="normal-link"> Get Back Home Page</a>
            <p className="s36 text-center">Đăng Nhập</p>
            <form onSubmit={onHandleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={onHandleChangeUser}
                required
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                name="password"
                onChange={onHandleChangePass}
                required
              />
              <button className="mt-15">Login</button>
              <div className=" w-100 s14 d-flex justify-content-space-between">
                <a href="#" className="normal-link">Forgot Password?</a>
                <a href="#" className="normal-link">Login with SMS</a>
              </div>

            </form>

        </div>
      </Container>
    </section>
  );
}

export default Login;