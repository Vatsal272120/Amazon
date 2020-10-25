import React, { useState, useEffect } from "react";
import "../Styles/Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import axios from "../axios";

const Payment = () => {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  // states for the button's state
  const [disabled, setDisabled] = useState(true);
  const [error, seterror] = useState(null);
  const [processing, setprocessing] = useState("");
  const [succeeded, setsucceeded] = useState(false);

  // generate the client secret key- dependent on the basket( price )
  const [clientSecret, setclientSecret] = useState();

  // whenever the basket changes, code will make the request and update the client secret
  useEffect(() => {
    const getClientSecret = async () => {
      // setting up
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setclientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  // stripe
  const handleSubmit = async (e) => {
    e.preventDefault();

    // blocks multiple clicking of the buy btn
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment Confirmation

        setsucceeded(true);
        seterror(null);
        setprocessing(false);

        history.replace("/orders");
      });
  };

  // listens to any changes in the card element, and displays any errors as user types in the details
  const handleChange = (e) => {
    // if event is empty, disables the btn
    setDisabled(e.empty);

    // shows error message if any error occurs
    seterror(e.error ? e.error.message : "");
  };

  return (
    <div className='paymnet'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        {/* payment sec - delivery add */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>

          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123,Amherst Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* payment sec - item review */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>

          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment sec - delivery add payment method*/}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>

          <div className='payment__details'>
            {/* stripe  */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : " Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
