import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  `pk_test_51Hf4ZSINMjRZRciDTHbiIKCH6y5qB94K1AsbufSiAdMkijbZIBgQv8TQxUouG2qNXoWsXJIaq2rRH55Z85ny1CB500SLzcZGyK`
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // to keep track of the user
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser, "😊");

      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
