// pages/index.js
import { getSession } from 'next-auth/react';
import LogoutButton from '../components/LogoutButton';

const Home = ({ session }) => {
  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Welcome, {session.user.name}!</h2>
      <LogoutButton />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Home;