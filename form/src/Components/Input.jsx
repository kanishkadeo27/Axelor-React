import React from "react";

const Input = ({
  label,
  type = "text",
  className,
  onChange,
  placeholder = "",
  name,
  onBlur,
  errors = {},
}) => {
  return (
    <>
      <div className="items">
        <label htmlFor={name} className="form-label">
          {label}:
        </label>
        <input
          autoComplete="off"
          id={name}
          type={type}
          className={className ?? "form-control"}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors[name] && <div className="form-error">{errors[name]}</div>}
      </div>
    </>
  );
};

export default Input;
