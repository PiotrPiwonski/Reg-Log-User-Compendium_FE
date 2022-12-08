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
    <>
      <section>
        <h1>Log in</h1>
        <p>
          Don't have an account? <Link to="/sign-up">Sign up now!</Link>
        </p>
      </section>
      <section>
        <AuthForm
          onSubmit={onSubmit}
          onChange={onChange}
          email={email}
          password={password}
        />
      </section>
    </>
  );
};

export default Login;
