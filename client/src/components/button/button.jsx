import React from "react";

export default function ButtonPrimary({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-primary-text bg-button-primary rounded-md focus:outline-none items-center py-1 text-center ${className}`}
    >
      {text}
    </button>
  );
}