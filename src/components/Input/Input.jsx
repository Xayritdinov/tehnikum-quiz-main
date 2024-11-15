import React from 'react'

import "./Input.css";

export const Input = ({label, type, name, id, placeholder, pattern, errorMessage}) => {
  return (
    <>
      <label className="input-wrapper" htmlFor="username">
        {label}
        <input
          required
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          pattern={pattern}
        />
        <span id="error-message">
          {errorMessage}
        </span>
      </label>
    </>
  )
}
