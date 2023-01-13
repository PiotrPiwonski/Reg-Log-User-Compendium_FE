import * as React from 'react';
import FormInput from './FormInput';
import { HiOutlineEye, HiOutlineUserCircle } from 'react-icons/hi';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
}
const FormSignIn = ({ onSubmit, onChange, email, password }: Props) => {
  return (
    <section className="form-box">
      <div>
        <form onSubmit={onSubmit}>
          <FormInput
            className="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Your Email"
            labelTitle="Email"
            IconInput={HiOutlineUserCircle}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Your Password"
            labelTitle="Password"
            IconInput={HiOutlineEye}
            isButtonSubmit={true}
          />
        </form>
      </div>
    </section>
  );
};
export default FormSignIn;
