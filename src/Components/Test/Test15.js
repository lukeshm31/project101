import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Test15 = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);  // Use a more appropriate initial value

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `http://localhost:5000/`+ id
        const response = await axios.get(url); // Replace with your API endpoint
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
      <ul>
        <li> {users.name} </li>
        <li> {users.designation} </li>
        <li> {users.hobby} </li>
        

      </ul>

    </div>
  );
};

export default Test15;