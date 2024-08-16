import { IoMdClose } from "react-icons/io";

import "./ConfirmDialog.css";

import useDeleteChat from "../../../hooks/useDeleteChat";
import useDialog from "../../../store/useDialog";

const ConfirmModal = () => {
  const { setShowConfirmDialog } = useDialog();
  const { deleteChat } = useDeleteChat();

  const handleClick = async (e) => {
    e.preventDefault();
    await deleteChat();
    setShowConfirmDialog(false);
  };

  return (
    <div className="transparent-bg">
      <div className="card-container">
        <button
          className="card-close-btn"
          onClick={() => setShowConfirmDialog(false)}
        >
          <IoMdClose size={20} color="#111827" />
        </button>
        <h1 className="card-title">Delete this chat?</h1>
        <div className="buttons">
          <button className="confirm-btn" onClick={handleClick}>
            Yes
          </button>
          <button
            className="deny-btn"
            onClick={() => setShowConfirmDialog(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
