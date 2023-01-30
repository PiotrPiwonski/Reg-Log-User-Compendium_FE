import { Link } from 'react-router-dom';

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
      <div className="text-modal-container" onClick={closeModal}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="text-modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="text-modal-text">{modalText}</div>
          {linkPath ? (
            <Link to={linkPath} className="text-modal-link">
              <button className="text-modal-button" onClick={closeModal}>
                OK
              </button>
            </Link>
          ) : (
            <button className="text-modal-button" onClick={closeModal}>
              OK
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TextInfoModal;
