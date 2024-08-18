import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Test15 = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);  // Use a more appropriate initial value

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000`); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [id]); // Make 'id' a dependency

  const params = useParams();
  useEffect(() => {
    setId(params.id); // Update state with the id from useParams
  }, [params]); // Make 'params' a dependency

  return (
    <div>
      {id}
      <h2>Users</h2>
      <ul>
        Name:{users[0].name} <br/>
        Name:{users[0].designation} <br/>
        Name:{users[0].hobby} <br/>
        Name:{users[0].userid} <br/>
        <hr/>
      </ul>
    </div>
  );
};

export default Test15;