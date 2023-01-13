import FormInput from '../UI/form/FormInput';
import { HiOutlineEye, HiOutlineUserCircle } from 'react-icons/hi';
import FormHeading from '../UI/form/FormHeading';
import FormBox from '../UI/form/FormBox';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
}
const AuthSignIn = ({ onSubmit, onChange, email, password }: Props) => {
  return (
    <div>
      <FormHeading title="Sign In" info="Don't have an account?" link="/sign-up" linkText="Sign up now!" />
      <FormBox>
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
      </FormBox>
    </div>
  );
};
export default AuthSignIn;
