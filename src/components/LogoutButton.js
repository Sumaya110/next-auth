// components/LogoutButton.js
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
