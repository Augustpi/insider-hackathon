import React from 'react';

import Logo from '../../components/Logo/Logo';
import css from './Login.module.css'

function Login () {
  return (
    <main main className={css.FormSignin}>
      <form className={css.Form}>
        <Logo height="157px" />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <div class="checkbox mb-3">
          <label> <input type="checkbox" value="remember-me" /> Remember me </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main >

  )
}

export default Login;
