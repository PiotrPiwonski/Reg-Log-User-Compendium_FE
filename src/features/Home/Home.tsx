import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';

import { routes } from '../../routes/routesMap';

export const Home = () => {
  const navigate = useNavigate();
  {
    /* TODO all CSS in JS styles to be moved to CSS Modules*/
  }
  return (
    <div className={styles.homeWrapper} data-testid="home-test">
      <h1 className={styles.homeTitle}>HOME</h1>
      <div className={styles.homeButtonWrapper}>
        <button className={styles.homeButton} onClick={() => navigate(routes.signIn)}>
          Sing In
        </button>
        <button className={styles.homeButton} onClick={() => navigate(routes.signUp)}>
          Sing Up
        </button>
      </div>
    </div>
  );
};
