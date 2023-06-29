import React, { useContext, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
function Login() {
  const { username,setusername, setshowprofile } = useContext(LoginContext);
  const navigate = useNavigate();
  const [haslo, setHaslo] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the user profile exists
    try {
      const response = await fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: e.target.login.value }),
      });

      if (response.ok) {
        // User profile exists, navigate to profile.js
		navigate('/profile', { state: { username: e.target.login.value } });
       
      } else {
        // User profile doesn't exist, handle the appropriate error or display a message
        // You can set an error message in the state and display it in the UI
      }
    } catch (error) {
      // Handle any errors that occur during the API request
    }
  };

  return (
    <form onSubmit={handleLogin}>
      Login:
      <input
        type='text'
        id='login'
        onChange={(e) => {
          setusername(e.target.value);
        }}
      /><br />

      Hasło:
      <input
        type='password'
        id='haslo'
        value={haslo}
        onChange={(e) => setHaslo(e.target.value)}
      /><br /><br />

      <button type='submit'>zatwierdz</button>
    </form>
  );
}

export default Login;
