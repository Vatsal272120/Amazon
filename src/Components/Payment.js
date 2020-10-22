import React from "react";
import "../Styles/Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

const Payment = () => {
  const [{ user, basket }, dispatch] = useStateValue();

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

          <div className='payment__details'>{/* stripe  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
