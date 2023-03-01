import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import { UserLoginRes } from 'types/backend';

import { messages } from './messages';

import AuthContext from '../../context/auth/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinners/LoadingSpinner';
import TextInfoModal from '../../components/TextInfoModal/TextInfoModal';
import AuthSignIn from '../../components/auth/AuthSignIn';
import { PageHeader } from '../../components/PageHeader';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { PagesTitles } from '../../config/pages-title';
import { routes } from '../../routes/routesMap';
import { login } from '../../services/api/auth';

export const SignIn = () => {
  const { formatMessage } = useIntl();

  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [modalLink, setModalLink] = useState<string>('');

  // Context
  const { state: authState, dispatch } = useContext(AuthContext);

  useDocumentTitle(PagesTitles.SIGN_IN);

  // Handlers
  const openModal = (text: string) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: 'SET_LOADING' });

    try {
      // TODO: implement response from AXIOS instead of fetch and move all to separated custom hook
      //  There is one line of code instead of 8 lines :D
      //const responseFromAxios = await login(formData);

      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        const userData = (await res.json()) as UserLoginRes;
        dispatch({ type: 'SET_USER', payload: userData });
        setModalLink('/logged-in-user');
      } else if (res.status === 401) {
        openModal(formatMessage(messages.modalText.error401));
        return;
      }
    } catch (error: unknown) {
      openModal(formatMessage(messages.modalText.errorUnknown));
      console.log('Error: ', error);
      return;
    } finally {
      dispatch({ type: 'CLEAR_LOADING' });
    }
  };

  //  I would not display that instead of the page but on the top of the page
  // blur background with z-index higher than page and on the top of that loader :)
  if (authState.isLoading) {
    return <LoadingSpinner isLoadingPage={true} />;
  }

  // TODO: Think about architecture here
  // I would say that auth.user info is already information which should be on route /user/profile or some modal to be clicked
  // if (authState.user) {
  //   return (
  //     <div>
  //       <h1>
  //         {formatMessage(messages.welcome)} {authState.user.email}
  //       </h1>
  //       <p>
  //         {formatMessage(messages.yourId)} {authState.user.id}
  //       </p>
  //       <p>
  //         {formatMessage(messages.yourRole)} {authState.user.role}
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <>
      <TextInfoModal modalVisible={modalVisible} modalText={modalText} linkPath={modalLink} closeModal={closeModal} />
      {authState.isLoading ? (
        <LoadingSpinner isLoadingPage={true} />
      ) : (
        <>
          <PageHeader
            title={formatMessage(messages.pageHeader.title)}
            info={formatMessage(messages.pageHeader.info)}
            link={routes.signUp}
            linkText={formatMessage(messages.pageHeader.linkText)}
          />
          <AuthSignIn onSubmit={onSubmit} onChange={onChange} email={email} password={password} />
        </>
      )}
    </>
  );
};
