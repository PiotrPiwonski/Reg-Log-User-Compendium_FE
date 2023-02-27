import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';

import { routes } from '../../routes/routesMap';

export const Home = () => {
  const navigate = useNavigate();
  {
    /* TODO all CSS in JS styles to be moved to CSS Modules*/
  }
  return (
    <div
      data-testid="home-test"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: 50 }}>HOME</h1>
      <div style={{ display: 'flex', gap: 30, marginTop: 40 }}>
        <button className={styles.button} onClick={() => navigate(routes.signIn)}>
          Sing In
        </button>
        <button className={styles.button} onClick={() => navigate(routes.signUp)}>
          Sing Up
        </button>
      </div>
    </div>
  );
};
