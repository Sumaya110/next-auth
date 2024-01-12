import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../Login.module.css';

export default function Home() {
  const { data: session, status } = useSession(); // include status
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if the user is not authenticated
    if (status === 'loading') {
      // Still loading session, show a loading state or redirect later
      return;
    }

    if (!session) {
      router.replace('/login');
    }

    // if (session) {
    //   router.replace('/');
    // }
  }, [session, status, router]);

  function handleSignOut() {
    signOut();
  }

  if (status === 'loading') {
    return <div>Loading...</div>; // or any loading state you prefer
  }

  return (
    <div className={styles.container}>
      <main>
        <h3 className={styles.welcomeText}>Welcome to the Homepage</h3>
        <div>
          <button onClick={handleSignOut} className={styles.logoutButton}>
            SignOut
          </button>
        </div>
      </main>
    </div>
  );
}
