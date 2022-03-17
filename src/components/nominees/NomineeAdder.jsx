import React from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NomineeAdder(props) {
  const handleEnterPress = (event) => {
    if (event.key === "Enter")
      props.onAddClick();
  };

  return (
    <div className="add-nominee full-width">
      <input
        className="input control"
        type="text"
        placeholder="أدخل اسما لإضافته"
        onChange={props.onInputChange}
        onKeyPress={(event) => handleEnterPress(event)}
        value={props.inputName} />
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={"fa-3x clickable"}
        onClick={props.onAddClick} />
    </div>
  );
}
