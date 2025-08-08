import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const BackArrowIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M328 112L184 256l144 144"
      />
    </svg>
  );
};

export default BackArrowIcon;
