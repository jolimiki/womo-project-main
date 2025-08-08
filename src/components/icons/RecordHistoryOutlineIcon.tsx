import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const RecordHistoryOutlineIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 48 48" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={4}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15"
        ></path>
        <circle cx={32} cy={32} r={6}></circle>
        <path strokeLinecap="round" strokeLinejoin="round" d="m37 36l5 4M14 16h20m-20 8h8"></path>
      </g>
    </svg>
  );
};

export default RecordHistoryOutlineIcon;
