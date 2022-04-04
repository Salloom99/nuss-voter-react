import React from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NomineeAdder(props) {
  const handleEnterPress = (event) => {
    if (event.key === "Enter")
      props.onAddClick();
  };

  return (
    <div className="manager__header">
      <input
        className="manager__header__input control nice-text-input"
        type="text"
        placeholder="أدخل اسما لإضافته"
        onChange={props.onInputChange}
        onKeyPress={(event) => handleEnterPress(event)}
        value={props.inputName} />
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={"manager__header__btn"}
        onClick={props.onAddClick} />
    </div>
  );
}
