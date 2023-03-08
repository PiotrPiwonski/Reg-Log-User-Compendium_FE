import { HeaderUserProps } from './types';
import styles from './HeaderUser.module.css';

export const HeaderUser = ({ id, email, role }: HeaderUserProps) => {
  return (
    <header data-testid="header-user-test" className={styles.headerUserWrapper}>
      <div className={styles.headerUserAvatarWrapper}>
        <img src="/avatars/w1.png" alt="Avatar" className={styles.headerUserAvatarImg} />
      </div>
      <div className={styles.headerUserInfoWrapper}>
        <h1 className={styles.headerUserInfoTitle}>Witaj użytkowniku (email): {email}</h1>
        <p className={styles.headerUserInfoDetail}>Twoje Id w systemie to: {id}</p>
        <p className={styles.headerUserInfoDetail}>Twoja rola w systemie to: {role}</p>
      </div>

      <div className={styles.headerUserButtonWrapper}>
        <button className={styles.headerUserButton}>LogOut</button>
        <button className={styles.headerUserButton}>Settings</button>
      </div>
    </header>
  );
};
