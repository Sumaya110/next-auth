// pages/signup.js
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with logic to validate credentials and retrieve user data
    console.log('User signed in:', credentials.username);
    // Automatically sign in the user after sign-in
    signIn('credentials', { ...credentials, callbackUrl: '/' });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
