// Navbar.js
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from '../src/styles/Navbar.module.css';

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.header}>
      <ul className={`${styles.mainNav} ${!session ? styles.loading : styles.loaded}`}>
        {/* <li>
          <Link href='/'>
            <a className={`${styles.stylesWrapper} ${styles.linkStyles}`}>Home</a>
          </Link>
        </li> */}

        <li>
          <Link href='/' passHref>
            <div className={`${styles.stylesWrapper} ${styles.linkStyles}`}>Home</div>
          </Link>
        </li>


        {!session && (
          <li>
            <Link href='/login' passHref>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  signIn('credential');
                }}
                className={`${styles.stylesWrapper} ${styles.linkStyles}`}
              >
                Sign In
              </div>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href='/signout' >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className={`${styles.stylesWrapper} ${styles.linkStyles}`}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
