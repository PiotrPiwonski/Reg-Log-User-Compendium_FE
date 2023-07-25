import { useEffect } from 'react';

import { HeaderUserProps } from './types';
import styles from './HeaderUser.module.css';
import { useLogout } from './useLogout';
import { useHeaderUser } from './useHeaderUser';

import { arrayAvatar } from '../../utils/avatars';
import { randomAvatar } from '../../utils/randomAvatar';

const avatar = randomAvatar(arrayAvatar);

export const HeaderUser = ({ id, email, role }: HeaderUserProps) => {
  const { handleLogOut } = useLogout();

  const timeLeft = useHeaderUser(20);
  useEffect(() => {
    if (timeLeft === 0) {
      handleLogOut();
    }
  }, [timeLeft, handleLogOut]);

  return (
    <header data-testid="header-user-test" className={styles.headerUserWrapper}>
      <div className={styles.headerUserAvatarWrapper}>
        <img src={avatar} alt="Avatar" className={styles.headerUserAvatarImg} />
      </div>
      <div className={styles.headerUserInfoWrapper}>
        <h1 className={styles.headerUserInfoTitle}>Witaj użytkowniku (email): {email}</h1>
        <p className={styles.headerUserInfoDetail}>Twoje Id w systemie to: {id}</p>
        <p className={styles.headerUserInfoDetail}>Twoja rola w systemie to: {role}</p>
        <p className={styles.headerUserInfoDetail}>{timeLeft}s. - Czas nieaktywności do wylogowania.</p>
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
