// src/StripePayment.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Load your publishable key from Stripe dashboard
const stripePromise = loadStripe('pk_test_51Q3Iny07hQNEsxqd2HZZrWrw3MSlIgOGhCjBg09L3DogVjcdTNP2XkPUe2D4AmtNMTcvvNoWxOQZeUmRcQWW7e0600I2zlnr8l');

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;
