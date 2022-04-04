import React from "react";

export const Select = ({ pk, options, id, label, ...rest }) => {
  // value, onChange as rest
  return (
    <div className="select control form__control">
      <select name={id} id={id} {...rest}>
        <option value="0" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option[pk]} value={option[pk]}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
