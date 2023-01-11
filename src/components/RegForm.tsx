import { HiOutlineUserCircle, HiOutlineEye } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegForm = ({ onSubmit, onChange, email, password, confirmPassword }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-box email">
        <label htmlFor="email" className="labels">
          Email
        </label>
        <div className="input-panel">
          <HiOutlineUserCircle className="input-icon" />
          <input type="text" name="email" id="email" value={email} onChange={onChange} placeholder="Your Email" />
        </div>
      </div>

      <div className="input-box">
        <label htmlFor="password" className="labels">
          Password
        </label>
        <div className="input-panel">
          <HiOutlineEye className="input-icon" />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            placeholder="Your Password"
          />
        </div>
      </div>

      <div className="input-box">
        <label htmlFor="password" className="labels">
          Confirm Password
        </label>
        <div className="input-panel">
          <HiOutlineEye className="input-icon" />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm Password"
          />
          <button type="submit">
            <MdArrowForwardIos className="arrow-icon" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegForm;
