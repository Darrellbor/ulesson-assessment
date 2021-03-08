//@flow
import React, { type Node } from "react";

type VideoPauseProps = {
  id: String,
  onClick?: Function,
};

export const VideoPause = (props: VideoPauseProps): Node => {
  return (
    <svg
      id={props.id}
      width="105"
      height="107"
      viewBox="0 0 105 107"
      fill="none"
      onClick={props.onClick}
    >
      <mask
        id="mask0"
        masktype="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="105"
        height="107"
      >
        <path
          d="M0.0212402 0.0323792H104.996V106.988H0.0212402V0.0323792Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M13.0762 86.591L13.0756 86.5905C1.51942 76.0824 -0.0885944 56.5296 5.58991 38.8218C11.2654 21.1233 24.1498 5.49618 41.2936 2.78448C57.8516 0.21186 75.7845 11.3968 87.9858 26.9759C94.0768 34.7532 98.7119 43.5946 101.013 52.2978C103.315 61.0027 103.276 69.5412 100.061 76.7426C93.6063 91.2024 78.9301 100.102 62.3014 102.163C45.6769 104.224 27.1539 99.439 13.0762 86.591Z"
          fill="white"
          stroke="#FCFBF9"
          strokeWidth="0.80464"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="41.5"
          y="43.5"
          width="8.24"
          height="23.3871"
          rx="1.5"
          fill="#EA7052"
          stroke="#EA7052"
        />
        <rect
          x="53.26"
          y="43.5"
          width="8.24"
          height="23.3871"
          rx="1.5"
          fill="#EA7052"
          stroke="#EA7052"
        />
      </g>
    </svg>
  );
};

export default VideoPause;
