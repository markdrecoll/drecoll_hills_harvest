import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import NavigationMenu from "../components/NavigationMenu";


function Register() {
  
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event: any) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })

    const data = await response.json();

    if(data.status === 'ok') {
      navigate('/login')
    }

    console.log(data);
  }

  return (
    <>
      <NavigationMenu />
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
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
          <input type="submit" value="Register" />
        </form>
      </div>
      <br />
      <br />
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default Register;
