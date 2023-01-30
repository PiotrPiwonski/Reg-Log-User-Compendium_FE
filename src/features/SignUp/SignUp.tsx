import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineEye, HiOutlineUserCircle } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import useForm from '../../hooks/useForm';
import TextInfoModal from '../../components/TextInfoModal/TextInfoModal';
import LoadingSpinner from '../../components/LoadingSpinners/LoadingSpinner';
import { PagesTitles } from '../../config/pages-title';

type SignUpForm = {
  email: string;
  password: string;
  password2: string;
};

const SignUp = () => {
  // Local state and hooks
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [modalLink, setModalLink] = useState<string>('');
  const { form, tag, updateValue, errors, submitForm } = useForm<SignUpForm>({
    email: '',
    password: '',
    password2: '',
  });

  // Set page title
  useDocumentTitle(PagesTitles.SIGN_UP);

  // Handlers
  const openModal = (text: string) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.status === 201) {
        setModalLink('/');
        openModal('Registration successful! Please click OK to log in.');
        return;
      } else {
        const errorMsg = String((await res.json()).message);
        openModal(`Error registering new user: ${errorMsg}`);
        return;
      }
    } catch (error: unknown) {
      openModal('Unknown error occurred. Logging to console.');
      console.log('Unknown error occurred: ', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Returns
  return (
    <>
      <TextInfoModal modalVisible={modalVisible} modalText={modalText} linkPath={modalLink} closeModal={closeModal} />
      <h1 className="section-title">Sign Up</h1>
      <p className="account-info">
        Already have an account?{' '}
        <Link to="/" className="sign-up account-info">
          Log in here.
        </Link>
      </p>
      <section className="form-box">
        <form onSubmit={submitForm(onSubmit)}>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <div className="input-panel">
              <HiOutlineUserCircle className="input-icon" />
              <input
                {...tag('email', { required: true, email: true })}
                type="email"
                value={form.email}
                onChange={updateValue}
                placeholder="Email"
              />
              {errors.email && <div className="input-errors">{errors.email}</div>}
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <div className="input-panel">
              <HiOutlineEye className="input-icon" />
              <input
                {...tag(
                  'password',
                  { minLength: 4, maxLength: 20 },
                  'Password has to be between 4 and 20 characters long',
                )}
                type="password"
                value={form.password}
                onChange={updateValue}
                placeholder="Password"
              />
              {errors.password && <div className="input-errors">{errors.password}</div>}
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="password2">Repeat Password</label>
            <div className="input-panel">
              <HiOutlineEye className="input-icon" />
              <input
                {...tag('password2', { equalTo: form.password }, 'Passwords do not match')}
                type="password"
                value={form.password2}
                onChange={updateValue}
                placeholder="Repeat Password"
              />
              {errors.password2 && <div className="input-errors">{errors.password2}</div>}
              <button type="submit">
                <MdArrowForwardIos className="arrow-icon" />
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUp;