import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import AuthForm from '../components/AuthForm';
import { UserLoginRes } from 'types';

const Login = () => {
  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // Context
  const { state, dispatch } = useContext(AuthContext);
  const isAuthLoading = state.isLoading;

  // Handlers
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'SET_LOADING' });

    try {
      const res = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        const userData = (await res.json()) as UserLoginRes;
        dispatch({ type: 'SET_USER', payload: userData });

        alert('Poprawnie zalogowano!');
      } else if (res.status === 401) {
        alert('Błędny email lub hasło.');
      }
    } catch (error) {
      alert('Coś poszło nie tak...');
      console.log('Error: ', error);
    } finally {
      dispatch({ type: 'CLEAR_LOADING' });
    }
  };

  // Returns
  if (isAuthLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <section>
        <h1 className="section-title">Log in</h1>
        <p className="account-info">
          Don't have an account?{' '}
          <Link to="/sign-up" className="sign-up account-info">
            Sign up now!
          </Link>
        </p>
      </section>
      <section className="form-box">
        <div>
          <AuthForm onSubmit={onSubmit} onChange={onChange} email={email} password={password} />
        </div>
      </section>
    </div>
  );
};

export default Login;
