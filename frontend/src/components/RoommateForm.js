import React, { useState } from 'react';
import axios from 'axios';

function RoommateForm({ fetchRoommates }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [budget, setBudget] = useState('');
  const [preferences, setPreferences] = useState('');
  const [searchType, setSearchType] = useState('roommate'); // Default is 'roommate'

  // Allow only letters and spaces for the "Name" field
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  // Allow only numeric input for the "Number" field
  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number || !budget || !preferences || !searchType) {
      alert('All fields are required.');
      return;
    }

    await axios.post('http://localhost:5000/api/roommates', { 
      name, 
      number, 
      budget, 
      preferences, 
      searchType 
    });

    setName('');
    setNumber('');
    setBudget('');
    setPreferences('');
    setSearchType('roommate');
    fetchRoommates();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <label>My Number:</label>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={number}
        onChange={handleNumberChange}
      />
      <label>Budget:</label>
      <input
        type="number"
        placeholder="Enter budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <label>My Preferences of my Roommate:</label>
      <textarea
        placeholder="E.g., pet-friendly, non-smoker"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      ></textarea>
      <label>Search Type:</label>
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="roommate"> Searching for Roommate only</option>
        <option value="roommate_and_apartment"> Searching for both Roommate and Apartment</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RoommateForm;
