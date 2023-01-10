import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import AuthForm from '../components/AuthForm';
import LoadingSpinner from '../components/LoadingSpinners/LoadingSpinner';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PagesTitles } from '../config/pages-title';
import { UserLoginRes } from 'types/backend';

const Login = () => {
  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // Context
  const { state: authState, dispatch } = useContext(AuthContext);

  useDocumentTitle(PagesTitles.SIGN_IN);

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
  if (authState.isLoading) {
    return <LoadingSpinner isLoadingPage={true} />;
  }

  if (authState.user) {
    return (
      <div>
        <h1>Witaj {authState.user.email}</h1>
        <p>Twoje ID: {authState.user.id}</p>
        <p>Twoja rola: {authState.user.role}</p>
      </div>
    );
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
