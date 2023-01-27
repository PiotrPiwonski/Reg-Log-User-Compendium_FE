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
      <div className="text-modal-container" onClick={closeModal}>
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
