import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { HeaderUserProps } from './types';
import styles from './HeaderUser.module.css';

import { arrayAvatar } from '../../utils/avatars';
import { randomAvatar } from '../../utils/randomAvatar';
import AuthContext from '../../context/auth/AuthContext';
import { routes } from '../../routes/routesMap';

export const HeaderUser = ({ id, email, role }: HeaderUserProps) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = async () => {
    const res = await fetch('http://localhost:3001/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 200) {
      console.log('wylogowanie');
      dispatch({ type: 'RESET_USER' });
      return navigate(routes.home);
    } else {
      console.log('błąd wylogowania');
    }
  };
  return (
    <header data-testid="header-user-test" className={styles.headerUserWrapper}>
      <div className={styles.headerUserAvatarWrapper}>
        <img src={randomAvatar(arrayAvatar)} alt="Avatar" className={styles.headerUserAvatarImg} />
      </div>
      <div className={styles.headerUserInfoWrapper}>
        <h1 className={styles.headerUserInfoTitle}>Witaj użytkowniku (email): {email}</h1>
        <p className={styles.headerUserInfoDetail}>Twoje Id w systemie to: {id}</p>
        <p className={styles.headerUserInfoDetail}>Twoja rola w systemie to: {role}</p>
      </div>
      <div className={styles.headerUserButtonWrapper}>
        <button className={styles.headerUserButton} onClick={handleLogOut}>
          LogOut
        </button>
        <button className={styles.headerUserButton}>Settings</button>
      </div>
    </header>
  );
};
