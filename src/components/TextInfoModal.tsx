import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  modalVisible: boolean;
  modalText: string;
  linkPath?: string;
};

const TextInfoModal: React.FC<Props> = ({ modalVisible, modalText, linkPath }) => {
  const [visible, setVisible] = useState<boolean>(modalVisible);

  if (!visible) return <></>;

  return (
    <>
      <div className="text-modal-container" onClick={() => setVisible(false)}>
        <div className="text-modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="text-modal-text">{modalText}</div>
          {linkPath ? (
            <Link to={linkPath} className="text-modal-link">
              <button className="text-modal-button" onClick={() => setVisible(false)}>
                OK
              </button>
            </Link>
          ) : (
            <button className="text-modal-button" onClick={() => setVisible(false)}>
              OK
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TextInfoModal;
