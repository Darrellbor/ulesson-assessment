//@flow
import React, { type Node } from "react";

const Avatar = (): Node => {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none">
      <circle cx="24.5" cy="24.5" r="24.5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 24.9565C28.0125 24.9565 30.4545 22.5038 30.4545 19.4783C30.4545 16.4527 28.0125 14 25 14C21.9875 14 19.5455 16.4527 19.5455 19.4783C19.5455 22.5038 21.9875 24.9565 25 24.9565ZM15 34.5435C15 34.7956 15.2035 35 15.4545 35H34.5455C34.7965 35 35 34.7956 35 34.5435V33.6304C35 29.9375 32.5417 26.7826 27.7273 26.7826H22.2727C17.4583 26.7826 15 29.9375 15 33.6304V34.5435Z"
        fill="#313848"
      />
    </svg>
  );
};

export default Avatar;
