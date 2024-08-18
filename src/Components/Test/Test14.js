import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test14 = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setMessage(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data from the backend. Please make sure the backend server is running.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Message from backend:</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Test14;