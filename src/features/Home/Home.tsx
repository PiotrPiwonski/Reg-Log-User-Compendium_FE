import { useNavigate } from 'react-router-dom';

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
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: 50 }}>HOME</h1>
      <div style={{ display: 'flex', gap: 30, marginTop: 40 }}>
        <button
          style={{ display: 'flex', position: 'relative', fontSize: 35, width: '100%', padding: 40 }}
          onClick={() => navigate(routes.signIn)}
        >
          Sing In
        </button>

        <button
          style={{ display: 'flex', position: 'relative', fontSize: 35, width: '100%', padding: 40 }}
          onClick={() => navigate(routes.signUp)}
        >
          Sing Up
        </button>
      </div>
    </div>
  );
};
