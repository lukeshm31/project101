import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test14 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000'); // Replace with your API endpoint
            setUsers(response.data);
        } catch (error) {
        console.error('Error fetching users:', error);
        }
    };

    fetchUsers();
    }, []);



    return (
        <div>
            
            <h2>Users</h2>
            <ul>
                {users.map((user)=> (<li key={user._id}> {user.name} </li>))}

            </ul>
        
        </div>
    );

};

export default Test14;