import React, { useState } from 'react';

export default function SecretSantaForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleAddName = () => {
    if (name && !names.includes(name)) {
      setNames([...names, name]);
      setName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(names);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button type="button" onClick={handleAddName}>Add Name</button>
      <button type="submit">Draw Names</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </form>
  );
}