import { Link } from 'react-router-dom';

import styles from './TextInfoModal.module.css';
type Props = {
  modalVisible: boolean;
  modalText: string;
  closeModal: () => void;
  linkPath?: string;
};

const TextInfoModal: React.FC<Props> = ({ modalVisible, modalText, linkPath, closeModal }) => {
  if (!modalVisible) return <></>;

  return (
    <>
      {/* TODO  find and replace with semantic html - avoid nested divs*/}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={styles.textModalContainer} onClick={closeModal}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.textModalBox} onClick={(e) => e.stopPropagation()}>
          <div className={styles.textModalText}>{modalText}</div>
          {linkPath ? (
            <Link to={linkPath} className={styles.textModalLink}>
              <button className={styles.textModalButton} onClick={closeModal}>
                OK
              </button>
            </Link>
          ) : (
            <button className={styles.textModalButton} onClick={closeModal}>
              OK
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TextInfoModal;
