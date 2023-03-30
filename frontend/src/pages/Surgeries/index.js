
import React from 'react';

function SurgeriesPage() {
  const surgeries = [
    { id: 1, name: 'Appendectomy' },
    { id: 2, name: 'Cataract surgery' },
    { id: 3, name: 'Hip replacement' },
  ];

  return (
    <ul>
      {surgeries.map((surgery) => (
        <li key={        surgery.id
      )}>{surgery.name}</li>
      ))}
    </ul>
  );
}

export default SurgeriesPage;
