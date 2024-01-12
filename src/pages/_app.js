import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
// import Navbar from '../../components/Navbar'
// import styles from '../components/Navbar.css'

// import '../button.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
       {/* <Navbar /> */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp