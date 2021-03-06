import { useState } from 'react';

export const Form = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState({username: '', password: ''})


    const handleChange = (event) => {
        if(event.target.name === 'username') {
            setUsername(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        fetch('/send', { method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         body: JSON.stringify({username, password}) 
                        }
                        )
            .then(res => res.json())
            .then(res => setResponse(res))
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{response.username}</h1>
            <h2>{response.password}</h2>
            <label htmlFor='username'>Username</label>
            <br />
            <input onChange={handleChange} value={username} id='username' name='username' type='text' />
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <input onChange={handleChange} value={password} id='password' name='password' type='text' />
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}