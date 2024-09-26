// src/PricingPlans.js
import React, { useState } from 'react';
import StripePayment from './StripePayment';

const PricingPlans = () => {
  const [isPaying, setIsPaying] = useState(false);

  return (
    <div className="subscription-container">
      <h1>Subscription Plans</h1>
      <div>
        <h2>Free Plan</h2>
        <p>Basic features available to all users.</p>
      </div>
      <div>
        <h2>Premium Plan</h2>
        <p>Includes customization options, themes, content controls, and analytics dashboard.</p>
        <button onClick={() => setIsPaying(true)}>Select Premium</button>
      </div>
      {isPaying && <StripePayment />}
    </div>
  );
};

export default PricingPlans;
