import React from "react";
import "../styles/CreatingNewNotes.css";

const CreatingNewNotes = (props) => {
  //keyCode 13 is enter, if the keyDown event is the key Enter(13)then the function go as below
  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      props.submit(); //this () will call the callback function that binded to the submit
    }
  };

  return (
    <div className="creating-new-notes centered">
      <input
        onKeyDown={onKeyDownHandler}
        onChange={props.change}
        className="input-notes"
        type="text"
        value={props.value}
        maxLength="25"
      />
      <div className="adding-icon-container centered" onClick={props.submit}>
        <i className="far fa-paper-plane adding-icon" />
      </div>
    </div>
  );
};

export default CreatingNewNotes;
