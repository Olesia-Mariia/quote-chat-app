import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import "./DialogForm.css";
import useCreateChat from "../../../hooks/useCreateChat";
import useUpdateChat from "../../../hooks/useUpdateChat";
import useDialog from "../../../store/useDialog";

const DialogForm = ({ isNewChat }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { createChat } = useCreateChat();
  const { updateChat } = useUpdateChat();
  const { setShowCreateForm, setShowUpdateForm } = useDialog();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNewChat) {
      await createChat(firstName, lastName);
      setShowCreateForm(false);
    } else {
      await updateChat(firstName, lastName);
      setShowUpdateForm(false);
    }
  };

  return (
    <div className="transparent-bg">
      <div className="card-container">
        <button
          className="card-close-btn"
          onClick={() =>
            isNewChat ? setShowCreateForm(false) : setShowUpdateForm(false)
          }
        >
          <IoMdClose size={20} color="#111827" />
        </button>
        <h1 className="card-title">{`${
          isNewChat ? "Create" : "Rename"
        } Chat`}</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname" className="lable">
              First Name
            </label>
            <input
              className="input"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter first name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname" className="lable">
              Last Name
            </label>
            <input
              className="input"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Enter last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DialogForm;
