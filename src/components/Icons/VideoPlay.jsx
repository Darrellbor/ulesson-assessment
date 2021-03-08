//@flow
import React, { type Node } from "react";

type VideoPlayProps = {
  id: string,
  onClick?: Function,
};

export const VideoPlay = (props: VideoPlayProps): Node => {
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
          d="M12.0762 86.591L12.0756 86.5905C0.519421 76.0824 -1.08859 56.5296 4.58991 38.8218C10.2654 21.1233 23.1498 5.49618 40.2936 2.78448C56.8516 0.21186 74.7845 11.3968 86.9858 26.9759C93.0768 34.7532 97.7119 43.5946 100.013 52.2978C102.315 61.0027 102.276 69.5412 99.0614 76.7426C92.6063 91.2024 77.9301 100.102 61.3014 102.163C44.6769 104.224 26.1539 99.439 12.0762 86.591Z"
          fill="white"
          stroke="#FCFBF9"
          strokeWidth="0.80464"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42.6137 66.9226C42.6102 67.5526 43.2993 67.9421 43.8372 67.6141L63.2771 55.7618C63.7889 55.4498 63.7921 54.7079 63.2832 54.3915L43.9759 42.3857C43.4416 42.0535 42.7499 42.4354 42.7464 43.0645L42.6137 66.9226Z"
          fill="#EA7052"
        />
      </g>
    </svg>
  );
};

export default VideoPlay;
