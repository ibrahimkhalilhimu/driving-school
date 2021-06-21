import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';
const stripePromise = loadStripe('pk_test_51HZr9GLVoFmXs1X2Ur8De4DlFcFzKmWBjHxbjF91XhSgAiO6ujsEVoVfpbnvihNRIDlsKZPymKGUvSjxeEHmDWoQ00NxaeEbFZ');

const Payment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
  <SimpleCardFrom handlePayment={handlePayment}/>
    </Elements>
    );
};

export default Payment;