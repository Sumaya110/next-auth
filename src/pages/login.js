import styles from '../Login.module.css'; // Import your CSS module
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LogIn() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;

    const status = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: '/',
    });

    if (status.ok) router.push(status.url);
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
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
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </div>
      </form>

      <div className={styles.signUpLink}>
        Dont have an account? <Link href="/register">Sign Up</Link>
      </div>
    </div>
  );
}
