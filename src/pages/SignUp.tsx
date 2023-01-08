import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import useDocumentTitle from '../hooks/useDocumentTitle';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useDocumentTitle('Warsaw Team Sign Up');

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO Send to backend
    console.log(formData);
  };

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
        <AuthForm onSubmit={onSubmit} onChange={onChange} email={email} password={password} />
      </section>
    </>
  );
};

export default SignUp;
