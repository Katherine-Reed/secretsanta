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
      <label htmlFor="name">Enter a name</label><br/>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Rudy Rednose"
        id="name"
      />
      <button type="button" className="btn-add" onClick={handleAddName}>Add Name</button>
      <button type="submit" className="btn-draw">Draw Names</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </form>
  );
}