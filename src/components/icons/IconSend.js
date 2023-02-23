import React from 'react'

function IconSend (props) {
  
  const defaultProps = {
		width: 66,
		height: 66
	};

  props = {...defaultProps, ...props};
 
  return (
        <svg viewBox="0 0 24 24" fill="#0657F9" xmlns="http://www.w3.org/2000/svg" {...props}>
                <g  clipPath="url(#clip0_1_1348)">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.0554 3.39437C21.239 3.83193 21.0296 4.34338 20.5878 4.53671L3.18257 12.1535C2.7408 12.3469 2.2339 12.1489 2.05039 11.7113C1.86687 11.2737 2.07623 10.7623 2.51801 10.569L19.9233 2.95213C20.365 2.7588 20.8719 2.9568 21.0554 3.39437Z" fill="#0657F9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.6054 2.94448C21.0429 3.12799 21.2409 3.63489 21.0476 4.07666L13.4308 21.4819C13.2374 21.9237 12.726 22.1331 12.2884 21.9495C11.8509 21.766 11.6529 21.2591 11.8462 20.8173L19.463 3.4121C19.6563 2.97032 20.1678 2.76096 20.6054 2.94448Z" fill="#0657F9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.03165 11.0967C2.18798 10.6412 2.68121 10.3905 3.13332 10.5367L10.5292 12.9284C10.7869 13.0117 10.9875 13.2123 11.0709 13.47L13.4634 20.8667C13.6096 21.3188 13.3589 21.8121 12.9035 21.9685C12.448 22.1248 11.9602 21.8851 11.814 21.433L9.55383 14.4455L2.5672 12.1862C2.11509 12.04 1.87532 11.5522 2.03165 11.0967Z" fill="#0657F9"/>
                <path d="M17.704 5.08446C18.046 4.74245 18.5944 4.73633 18.9289 5.07079C19.2633 5.40526 19.2572 5.95366 18.9152 6.29567L13.961 11.2499C13.619 11.5919 13.0706 11.598 12.7361 11.2635C12.4016 10.9291 12.4078 10.3807 12.7498 10.0387L17.704 5.08446Z" fill="#0657F9"/>
                </g>
                <defs>
                <clipPath  id="clip0_1_1348">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
        </svg>
  )
}

export default IconSend
