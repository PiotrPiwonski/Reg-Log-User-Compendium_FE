import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useForm from '../hooks/useForm';
import TextInfoModal from '../components/TextInfoModal';
import LoadingSpinner from '../components/LoadingSpinners/LoadingSpinner';
import { HiOutlineUserCircle, HiOutlineEye } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';
import { PagesTitles } from '../config/pages-title';

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
  const navigate = useNavigate();

  // Set page title
  useDocumentTitle(PagesTitles.SIGN_UP);

  // Handlers
  const openModal = (text: string) => {
    setModalText(text);
    setModalVisible(true);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        // User created
        setModalLink('/');
        openModal(
          'Registration successful! Auto redirecting to sign in page in 10 seconds or click OK to redirect now.',
        );

        let time = 10;
        const interval = setInterval(() => {
          time--;
          setModalText(
            `Registration successful! Auto redirecting to sign in page in ${time} seconds or click OK to redirect now.`,
          );

          if (time < 0) {
            clearInterval(interval);
            navigate('/');
          }
        }, 1000);

        return;
      } else {
        // User not created
        const errorMsg = (await res.json()).message;
        openModal(`Error registering new user: ${errorMsg}`);
        return;
      }
    } catch (error: unknown) {
      // Error fetching response
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
      <TextInfoModal modalText={modalText} modalVisible={modalVisible} linkPath={modalLink} />
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
                {...tag('email', { email: true }, 'Has to be email format')}
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
                  {
                    minLength: 4,
                    maxLength: 20,
                  },
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
                {...tag(
                  'password2',
                  {
                    equalTo: form.password,
                  },
                  'Passwords do not match',
                )}
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
