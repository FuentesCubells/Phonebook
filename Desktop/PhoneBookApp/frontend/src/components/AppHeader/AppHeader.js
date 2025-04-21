import React from "react";

const AppHeader = ({ text }) => {

  const addIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect width="40" height="40" fill="white" fillOpacity="0.01" />
      <path d="M21.25 18.75V10H18.75V18.75H10V21.25H18.75V30H21.25V21.25H30V18.75H21.25Z" />
    </svg>
  );
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect
        width="40"
        height="40"
        rx="12"
        fill="white"
        fill-opacity="0.01"
      />
      <path
        d="M30 11.75L28.25 10L20 18.25L11.75 10L10 11.75L18.25 20L10 28.25L11.75 30L20 21.75L28.25 30L30 28.25L21.75 20L30 11.75Z"
        fill="#5C5100"
      />
    </svg>
  );

  return (
    <div className="app-header-container">
      <div className="app-header-name">
        <h2>{text}</h2>
      </div>
      <button className="app-header-btn">
        {text === "List" ? 
            <a href="/add-contact">
                {addIcon}
            </a>
            : 
            <a href="/">
                {closeIcon}
            </a>
        }
      </button>
    </div>
  );
};

export default AppHeader;
