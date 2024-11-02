import React, { useState } from 'react';
import SecretSantaForm from './SecretSantaForm';
import SecretSantaDraw from './SecretSantaDraw';

export default function App() {
  const [names, setNames] = useState([]);
  const [pairs, setPairs] = useState([]);

  const handleNamesSubmit = (submittedNames) => {
    setNames(submittedNames);
    setPairs(drawNames(submittedNames));
  };

  const drawNames = (names) => {
    let shuffled = [...names];
    let result = [];
    do {
      shuffled = shuffled.sort(() => Math.random() - 0.5);
    } while (shuffled.some((name, index) => name === names[index]));

    for (let i = 0; i < names.length; i++) {
      result.push({ giver: names[i], receiver: shuffled[i] });
    }
    return result;
  };

  return (
    <div>
      <h1><small>Kat's</small><br/>Secret Santa<br/><small>Generator</small></h1>
      <SecretSantaForm onSubmit={handleNamesSubmit} />
      {pairs.length > 0 && <SecretSantaDraw pairs={pairs} />}
    </div>
  );
}