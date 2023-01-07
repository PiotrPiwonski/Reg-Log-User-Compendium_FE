import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import LoadingSpinner from '../components/LoadingSpinners/LoadingSpinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        alert('Jesteś zalogowany.');
      } else if (res.status === 401) {
        // console.log(formData);
        alert('Błędny email lub hasło. ');
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner isLoadingPage={true} />;
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
