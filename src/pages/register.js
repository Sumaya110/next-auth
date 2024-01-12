import styles from '../Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      cpassword: e.target.cpassword.value,
    };

    console.log(formData);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch('http://localhost:3000/api/auth/signup', options);
      const data = await res.json();

      if (data) {
        router.push('http://localhost:3000');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.inputField}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inputField}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.inputField}
          />
        </div>

        <div>
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            className={styles.inputField}
          />
        </div>

        <div>
          <button type="submit" className={styles.loginButton}>
            SignUp
          </button>
        </div>
      </form>

      <div className={styles.signUpLink}>
        Have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}
