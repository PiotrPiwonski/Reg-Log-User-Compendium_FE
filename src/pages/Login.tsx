import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const propName = e.currentTarget.name;
    const newValue = e.currentTarget.value;

    setFormData((prev) => ({
      ...prev,
      [propName]: newValue,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO Send to backend
    console.log(formData);
  };

  return (
    <div>
      <section>
        <h1 className='section-title'>Log in</h1>
        <p className='account-info'>
          Don't have an account? <Link to="/sign-up" className='sign-up account-info'>Sign up now!</Link>
        </p>
      </section>
      <section className="form-box">
        <div >
          <AuthForm
              onSubmit={onSubmit}
              onChange={onChange}
              email={email}
              password={password}
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
