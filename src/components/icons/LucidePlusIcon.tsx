import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const LucidePlus = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14m-7-7v14"
      ></path>
    </svg>
  );
};

export default LucidePlus;
