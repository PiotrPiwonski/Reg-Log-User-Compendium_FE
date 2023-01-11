import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { pagesTitles } from '../config/pages-title';
import RegForm from '../components/RegForm';
import LoadingSpinner from '../components/LoadingSpinners/LoadingSpinner';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  useDocumentTitle(pagesTitles.SIGN_UP);

  const { email, password, confirmPassword } = formData;
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

    if (password.length < 6) {
      console.log(password);
      alert('Hasło musi mieć minimum 6 znaków.');
      setLoading(false);
      return;
    }
    if (password.length > 16) {
      alert('Hasło musi mieć maximum 16 znaków.');
      setLoading(false);
      return;
    }

    if (password === confirmPassword) {
      try {
        const res = await fetch('http://localhost:3001/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.body;
        console.log(data);
        if (res.status === 201) {
          alert('Jesteś zarejestrowany.');
        } else if (res.status === 400) {
          alert('Użytkownik o takim email już istnieje ! ');
        }
      } catch (error) {
        console.log('Error: ', error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Niepoprawne powtórzenie hasła!');
      setLoading(false);
      return;
    }
  };

  if (loading) {
    return <LoadingSpinner isLoadingPage={true} />;
  }

  return (
    <>
      <section>
        <h1 className="section-title">Sign up</h1>
        <p className="account-info">
          Already have an account?{' '}
          <Link to="/" className="sign-up account-info">
            Log in here.
          </Link>
        </p>
      </section>
      <section className="form-box">
        <RegForm
          onSubmit={onSubmit}
          onChange={onChange}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
        />
      </section>
    </>
  );
};

export default SignUp;
