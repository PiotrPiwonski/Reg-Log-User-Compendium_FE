import { useEffect, useState } from 'react';

import { HeaderUserProps } from './types';
import styles from './HeaderUser.module.css';
import { useLogout } from './useLogout';

import { arrayAvatar } from '../../utils/avatars';
import { randomAvatar } from '../../utils/randomAvatar';

const avatar = randomAvatar(arrayAvatar);

export const HeaderUser = ({ id, email, role }: HeaderUserProps) => {
  const [timeLeft, setTimeLeft] = useState(20000);
  const { handleLogOut } = useLogout();

  useEffect(() => {
    let interval: any;

    const resetTimer = () => {
      clearInterval(interval);
      setTimeLeft(20000);
      startTimer();
    };

    const startTimer = () => {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1000);
      }, 1000);
    };

    const handleEvent = () => {
      resetTimer();
    };

    startTimer();

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('keypress', handleEvent);
    window.addEventListener('click', handleEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('keypress', handleEvent);
      window.removeEventListener('click', handleEvent);
    };
  }, [timeLeft]);

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
        <p className={styles.headerUserInfoDetail}>{timeLeft / 1000}s. - Czas nieaktywności do wylogowania.</p>
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
