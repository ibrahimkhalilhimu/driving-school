import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import swal from 'sweetalert'


const SimpleCardFrom = () => {


    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        swal("Failed!", error.message, "error", { dangerMode: true });
      } else {
        swal("Good job!", "Your Payment Successfully!", "success");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-danger mt-2" type="submit" disabled={!stripe}>
          Payment
        </button>
      </form>
    );
};

export default SimpleCardFrom;