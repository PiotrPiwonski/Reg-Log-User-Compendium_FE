import FormInput from './FormInput';
import { HiOutlineEye, HiOutlineUserCircle } from 'react-icons/hi';
import FormHeading from './FormHeading';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  repeatPassword: string;
}
const FormSignUp = ({ onSubmit, onChange, email, password, repeatPassword }: Props) => {
  return (
    <div>
      <FormHeading title="Sign Up" info="Already have an account?" link="/" linkText="Log in here." />
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
            />
            <FormInput
              type="password"
              name="repeatPassword"
              value={repeatPassword}
              onChange={onChange}
              placeholder="Repeat Password"
              labelTitle="Repeat Password"
              IconInput={HiOutlineEye}
              isButtonSubmit={true}
            />
          </form>
        </div>
      </section>
    </div>
  );
};
export default FormSignUp;
