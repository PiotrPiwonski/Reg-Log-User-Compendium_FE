import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PagesTitles } from '../config/pages-title';

import AuthSignUp from '../components/auth/AuthSignUp';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinners/LoadingSpinner';

const SignUp = () => {
  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useDocumentTitle(PagesTitles.SIGN_UP);

  const { email, password, repeatPassword } = formData;

  // Handlers
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO Send to backend
    console.log(formData);

    setLoading(true);
    if (!email) {
      alert('Email jest wymagany.');
      setLoading(false);
      return;
    }
    if (!password) {
      alert('Hasło jest wymagane.');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      alert('Hasło musi mieć przynajmniej 6 znaków.');
      setLoading(false);
      return;
    }
    if (password.length > 16) {
      alert('Hasło musi mieć maksymalnie 16 znaków.');
      setLoading(false);
      return;
    }
    if (!repeatPassword) {
      alert('Repeat Password jest wymagane.');
      setLoading(false);
      return;
    }
    if (repeatPassword !== password) {
      alert('Hasło i jego powtórzenie musi być identyczne');
      setLoading(false);
      return;
    } else {
      try {
        const res = await fetch('http://localhost:3001/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        const errorMsg = data.message;
        if (res.status === 201) {
          alert(`Zarejstrowany użytkownik email: ${data.email} o id: ${data.id}`);
          return;
        }
        if (res.status === 400) {
          alert(`Błąd podczas rejestracji nowego użytkownika: ${errorMsg}`);
          return;
        } else {
          alert(`Jakiś inny błąd o statusie różnym od 400: ${res.status}`);
          return;
        }
      } catch (error) {
        alert('Coś nie tak...');
        console.log('Error: ', error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Returns
  return (
    <>
      <PageHeader title="Sign Up" info="Already have an account?" link="/" linkText="Log in here." />
      <AuthSignUp
        onSubmit={onSubmit}
        onChange={onChange}
        email={email}
        password={password}
        repeatPassword={repeatPassword}
      />
    </>
  );
};

export default SignUp;
