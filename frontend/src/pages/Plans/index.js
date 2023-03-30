
import React from 'react';

function PlansPage() {
  const plans = [
    { id: 1, name: 'Basic' },
    { id: 2, name: 'Premium' },
    { id: 3, name: 'Ultimate' },
  ];

  return (
    <ul>
      {plans.map((plan) => (
        <li key={plan.id}>{plan.name}</li>
      ))}
    </ul>
  );
}

export default PlansPage;
