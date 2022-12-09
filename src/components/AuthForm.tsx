import { HiOutlineUserCircle, HiOutlineEye } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
}

const AuthForm = ({ onSubmit, onChange, email, password }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <HiOutlineUserCircle />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="Your Email"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <HiOutlineEye />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="Your Password"
        />
        <button type="submit">
          <MdArrowForwardIos />
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
