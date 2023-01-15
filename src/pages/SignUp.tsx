import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PagesTitles } from '../config/pages-title';

import AuthSignUp from '../components/auth/AuthSignUp';
import PageHeader from '../components/PageHeader';

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
