import React from "react";
import '../style-sheets/Button.css';

function Button({ text, isClickButton, handleClick }) {
  return (
    <button className={ isClickButton ? "button-click" : "button-reset" }
    onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button