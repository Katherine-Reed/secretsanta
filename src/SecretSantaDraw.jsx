import React from 'react';

export default function SecretSantaDraw({ pairs }) {
  return (
    <div>
      <h2>Secret Santa Pairs</h2>
      <ul>
        {pairs.map((pair, index) => (
          <li key={index}>{pair.giver} → {pair.receiver}</li>
        ))}
      </ul>
    </div>
  );
}