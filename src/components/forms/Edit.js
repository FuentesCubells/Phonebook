import React , { useState }  from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { name } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("123456789");

  const handleEdit = () => {
    setIsEditing(true);
  };
  const onPhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="edit-container">
      <div className="edit-actions">
        <button className="edit-action" onClick={handleEdit}>Edit</button>
        <button className="edit-action">Erase</button>
      </div>
      <form className="edit-content" onSubmit={handleSubmit}>
        <div className="content-title">
          <img></img>
          <div className="content-info">
            <div className="icon"></div>
            <div className="content-name">
              <h2>Name</h2>
              <h3>Role</h3>
            </div>
          </div>
        </div>
        <div className="content-description">
        <div className="contact-info">
            <h3>Phone Number</h3>
            <div className="border-div"></div>
            {isEditing ? (
                <input
                className="editing-input"
                type="text"
                value={phoneNumber}
                onChange={(e) => onPhoneChange(e.target.value)}
                />
            ) : (
              <p>{phoneNumber}</p>
            )}
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <div className="border-div"></div>
            <p>example@gmail.com</p>
          </div>
          <div className="contact-info">
            <h3>Works for</h3>
            <div className="border-div"></div>
            <p>company name</p>
          </div>
          <div className="contact-notes">
            <h3>Notes</h3>
            <textarea
              rows="4"
              cols="50"
              className="input-notes"
              placeholder="Add-notes here"
            />
          </div>
        </div>
        <div className="form-submit">
          {isEditing ? (
            <button className="submit-button" type="submit">
              Submit
            </button>
          ) : <button className="submit-button" type="submit">
                Submit
        </button>}
        </div>
      </form>
    </div>
  );
};

export default Edit;
