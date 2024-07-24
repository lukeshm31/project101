import React, { useContext, useState } from "react";
import userContext from "../../Context/userContext";



export function Login() {
    console.log("log in")
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {setUser} = useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div>
            <h1> Login </h1>
            <input 
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"
            />
            
            <input 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            />

            <button onClick={handleSubmit}> Submit </button>
            
        </div>
    )
}

export function Profile() {
    console.log("proff")
    const {user} = useContext(userContext)
    if (!user) return <div> please Login </div>
    return <div> Welcome {user.username} </div>
}

