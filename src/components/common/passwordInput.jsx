import React from "react";

export const PasswordInput = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="form__control control nice-text-input"
      type="password"
      name="password"
      id="password"
      placeholder="كلمة المرور" />
  );
};
