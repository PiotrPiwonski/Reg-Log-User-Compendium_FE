import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PagesTitles } from '../config/pages-title';

import FormSignUp from '../components/UI/form/FormSignUp';

const SignUp = () => {
  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  useDocumentTitle(PagesTitles.SIGN_UP);

  const { email, password, repeatPassword } = formData;

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
      <FormSignUp
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
