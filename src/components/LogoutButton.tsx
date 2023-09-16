import { Navigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout.ts';
import GlobalButton from './GlobalButton.tsx';

export default function LogoutButton() {
  const { handleLogout, navigate } = useLogout();

  return (
    <>
      {navigate && <Navigate to="/login" replace />}
      <GlobalButton text="Log out" onClick={handleLogout} />
    </>
  );
}
