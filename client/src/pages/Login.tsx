import { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event: any) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json();

    if(data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      // window.location.href = '/dashboard';
    } else {
      alert('Please check your username and password');
    }

    console.log(data.user);
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
      <br />
      <br />
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default Login;
