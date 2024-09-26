// src/CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(true);
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {paymentSuccess && <div style={{ color: 'green' }}>Payment Successful!</div>}
    </form>
  );
};

export default CheckoutForm;
