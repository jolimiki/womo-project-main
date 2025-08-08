import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const CartOutlineIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M3 3h2l.5 3m0 0L7 15h11l3-9z"></path>
        <circle cx={8} cy={20} r={1}></circle>
        <circle cx={17} cy={20} r={1}></circle>
      </g>
    </svg>
  );
};

export default CartOutlineIcon;
