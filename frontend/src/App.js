// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RoommateForm from './components/RoommateForm';
import RoommateList from './components/RoommateList';
import './App.css';

function App() {
  const [roommates, setRoommates] = useState([]);

  const fetchRoommates = async () => {
    const response = await axios.get('http://localhost:5000/api/roommates');
    setRoommates(response.data);
  };

  useEffect(() => {
    fetchRoommates();
  }, []);

  return (
    <div>
      <Header />
      <RoommateForm fetchRoommates={fetchRoommates} />
      <RoommateList roommates={roommates} />
    </div>
  );
}

export default App;

