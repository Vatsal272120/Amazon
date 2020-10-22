import React, { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        if (user) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    // firebase register
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
          className='login__logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            className='login__signInButton'
            onClick={signIn}
            type='submit'>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          className='login__registerButton'
          onClick={register}
          type='submit'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
