import React from "react";

export const PasswordInput = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="input full-width control"
      type="password"
      name="password"
      id="password"
      placeholder="كلمة المرور" />
  );
};
