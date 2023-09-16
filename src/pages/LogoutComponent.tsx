import { useEffect } from 'react';
import useLogout from '../hooks/useLogout.ts';

export default function LogoutComponent() {
  const { handleLogout } = useLogout();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <div>Logging out...</div>;
}
