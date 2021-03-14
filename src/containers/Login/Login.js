import React from 'react';

import Logo from '../../components/Logo/Logo';
import css from './Login.module.css'

function Login () {
  return (
    <main className={css.FormSignin}>
      <form className={css.Form}>
        <Logo height="157px" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <label className="visually-hidden">Email address</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />
        <label className="visually-hidden">Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label> <input type="checkbox" value="remember-me" /> Remember me </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main >

  )
}

export default Login;
