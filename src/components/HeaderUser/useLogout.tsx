import { logout } from '../../services/api/auth';
import { routes } from '../../routes/routesMap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = async () => {
    const response = await logout();
    if (response?.status === 200) {
      dispatch({ type: 'RESET_USER' });
      navigate(routes.home);
    }
  };
  return { handleLogOut };
};
