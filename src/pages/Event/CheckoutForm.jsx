import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ apiUrl }) => {
  const stripe = useStripe();

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 100, // amount in smallest currency unit (e.g., cents for USD)
          currency: 'usd',
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Error redirecting to checkout:', result.error.message);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to initiate payment. Please try again.');
    }
  };

  return (
    <form onSubmit={handlePayment} className='w-full flex flex-col items-center'>
      <button
        type='submit'
        disabled={!stripe}
        className='bg-pink-500 text-white font-bold py-2 px-4 rounded mt-8'
      >
        Pay for Conference
      </button>
    </form>
  );
};

export default CheckoutForm;
