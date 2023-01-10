import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { pagesTitles } from '../config/pages-title';

const SignUp = () => {
  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useDocumentTitle(pagesTitles.SIGN_UP);

  const { email, password } = formData;

  // Handlers
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

  // Returns
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
