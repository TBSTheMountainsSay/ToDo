import React from 'react';

type TSvgSelectorProps = {
  id: string;
  className?: string;
  style?: Record<string, string>;
};

const SvgSelector: React.FC<TSvgSelectorProps> = ({ id, className, style }) => {
  const svgMap: Record<string, JSX.Element> = {
    profile: (
      <svg className={className} style={style} viewBox="0 0 116 150.99">
        <g>
          <path
            d="M67.9,140.31c-8.06-2.05-16.15-7.52-16.89-16.45-.92-11.08,9-18.56,17.92-23,11-5.48,24.09-7.41,36.24-6.59,13.4.9,29.08,5.14,38.48,15.32,6.54,7.07,7.39,17.39.51,24.66-3.3,3.49-7.5,4.9-12,6.05-6.3,1.62-13.61,1.15-20.06,1.32-8.36.23-16.73.12-25.09,0C80.84,141.47,73.9,141.85,67.9,140.31Z"
            transform="translate(-41.96 0.24)"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="18"
          />
          <ellipse
            cx="57.56"
            cy="36.01"
            rx="27.1"
            ry="27.01"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="18"
          />
        </g>
      </svg>
    ),
    search: (
      <svg className={className} style={style} viewBox="0 0 24 24">
        <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
      </svg>
    ),
    placeholder: (
      <svg className={className} style={style} viewBox="0 0 249.99 199.99">
        <g>
          <rect
            x="9"
            y="9"
            width="232"
            height="182"
            rx="17.99"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="17.99"
          />
          <polygon points="35 165 35 140.64 75.47 100.17 95.64 120.35 161 55 214.5 108.5 214.5 165 35 165" />
          <path
            d="M83,84c-.54,31.55-47.47,31.54-48,0C35.54,52.45,82.47,52.46,83,84Z"
            transform="translate(0 -25)"
          />
        </g>
      </svg>
    ),
    comment: (
      <svg viewBox="0 0 211 200" style={style} className={className}>
        <path
          d="M224.5,38.5v77a27,27,0,0,1-27,27h-56l-46,46h-13v-46h-19a27,27,0,0,1-27-27v-77a27,27,0,0,1,27-27h134A27,27,0,0,1,224.5,38.5Z"
          transform="translate(-25)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="21"
        />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 200 200" style={style} className={className}>
        <path
          d="M68,156.83h64.22c5.74,45.55-63.32,50.94-64.6,
                    4.95A32.31,32.31,0,0,1,68,
                    156.83Zm114.4-39.24c-4.17-4-16.1-9.55-17.28-14.58-1-5-.35-14-.14-24.05,
                    3-39.5-25.46-72.42-65-72.71C60.52,6.62,32.15,39.5,35.13,79,35.35,89,36,
                    98,35,103c-1.18,5-13.11,10.55-17.28,14.58-19.39,18.95-14,41.09,14.64,
                    39.24H167.77c14.52,0,26.28-3.08,26.28-17.59C194,133.81,189.31,124.25,
                    182.41,117.59Z"
          transform="translate(-0.24 -0.25)"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="18"
        />
      </svg>
    ),
    friends: (
      <svg
        viewBox="0 0 199.91 150.52"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
        style={style}
        className={className}
      >
        <g fill="none">
          <path
            d="M25.45,165.05C17.39,163,9.3,157.53,8.56,148.6c-.92-11.08,9-18.56,17.92-23,11-5.48,24.09-7.41,36.24-6.59,13.4.9,29.08,5.14,38.48,15.32,6.54,7.07,7.39,17.39.51,24.66-3.3,3.49-7.5,4.9-12,6.05-6.3,1.62-13.61,1.15-20.06,1.32-8.36.23-16.73.12-25.09,0C38.39,166.21,31.45,166.59,25.45,165.05Z"
            transform="translate(0 -24.55)"
          />
          <ellipse cx="57.06" cy="35.96" rx="27.1" ry="27.01" />
        </g>
        <g fill="none">
          <path
            d="M132.54,119.5a79.59,79.59,0,0,1,15.09-.42c13.4.91,29.07,5.15,38.48,15.32,6.54,7.08,7.38,17.4.51,24.66-3.31,3.5-7.51,4.9-12,6.06-6.31,1.61-13.62,1.15-20.07,1.32-6.15.16-12.29.15-18.44.06"
            transform="translate(0 -24.55)"
          />
          <ellipse cx="145.41" cy="35.51" rx="27.1" ry="27.01" />
        </g>
      </svg>
    ),
    messenger: (
      <svg viewBox="0 0 200 200" style={style} className={className}>
        <path
          d="M191,91.5c0,45.56-40.74,82.5-91,82.5a98.81,98.81,0,0,1-36.15-6.77C62.6,169.07,53.93,181.3,41,185c-14,4-32,6-32,6s12-13,17-22a161.79,161.79,0,0,0,8.93-19.82C18.88,134.29,9,113.94,9,91.5,9,45.94,49.74,9,100,9S191,45.94,191,91.5Z"
          fill="none"
          strokeLinejoin="round"
          strokeWidth="18"
        />
      </svg>
    ),
    communities: (
      <svg
        viewBox="0 0 199.75 150"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
        style={style}
        className={className}
      >
        <g fill="none">
          <g>
            <path
              d="M67.89,168.64c-8.06-2.06-16.15-7.52-16.89-16.45-.91-11.08,9-18.57,17.92-23,11-5.47,24.09-7.4,36.24-6.58,13.41.9,29.08,5.14,38.48,15.32,6.54,7.07,7.39,17.39.51,24.66-3.3,3.49-7.5,4.89-12,6-6.31,1.61-13.62,1.15-20.07,1.32-8.36.23-16.73.12-25.09-.05C80.83,169.79,73.89,170.18,67.89,168.64Z"
              transform="translate(-0.25 -28.59)"
            />
            <ellipse cx="99.26" cy="35.51" rx="27.1" ry="27.01" />
          </g>
          <g transform="translate(-0.25 -28.59)">
            <g>
              <path d="M18.07,153.38C13.23,151,9.27,147,8.8,141.3c-.78-9.42,7.7-15.78,15.27-19.54a56.62,56.62,0,0,1,18.68-5.32" />
              <path d="M47.33,89.23a22.93,22.93,0,0,1,2.09-45.71" />
            </g>
            <g>
              <path d="M182.22,153.5c4.82-2.4,8.76-6.43,9.23-12.1.78-9.43-7.67-15.8-15.21-19.56a56.18,56.18,0,0,0-18.6-5.33" />
              <path d="M153.08,89.27A23,23,0,0,0,151,43.5" />
            </g>
          </g>
        </g>
      </svg>
    ),
    audio: (
      <svg
        viewBox="0 0 200 200"
        stroke="#3fa9f5"
        strokeMiterlimit="10"
        strokeWidth="18"
        style={style}
        className={className}
      >
        <g fill="none">
          <rect x="9" y="9" width="182" height="182" rx="46" />
          <path
            d="M15.37,82.44c14.76-.58,29.63-2,43.66-6.59C67.19,73.18,75,69.47,82.71,65.77l32.48-15.51c2.46-1.17,5-2.37,7.72-2.56,3.22-.22,6.35,1,9.3,2.3a131.84,131.84,0,0,1,34.16,21.81c7.32,6.45,14.82,14.13,24.55,14.89"
            transform="translate(0)"
          />
          <line x1="44" y1="112" x2="44" y2="141" />
          <line x1="82" y1="100" x2="82" y2="152" />
          <line x1="119" y1="82" x2="119" y2="155" />
          <line x1="157" y1="96" x2="157" y2="152" />
        </g>
      </svg>
    ),
    video: (
      <svg
        viewBox="0 0 200 200"
        stroke="#3fa9f5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
        style={style}
        className={className}
      >
        <g fill="none">
          <path d="M191,55v90a46,46,0,0,1-46,46H55A46,46,0,0,1,9,145V55A46,46,0,0,1,55,9h90A46,46,0,0,1,191,55ZM106,9H55A46,46,0,0,0,9,55v90a46,46,0,0,0,46,46h51a46,46,0,0,0,46-46V55A46,46,0,0,0,106,9Z" />
          <path d="M116.22,100a4.27,4.27,0,0,0-1-2.47,38.43,38.43,0,0,0-8.33-7.66A295.18,295.18,0,0,0,81.07,73.08C76.41,70.3,71,68,64.58,68.33c-5.08.26-8.52,6.15-9.79,10.84-1,3.86-1,7.92-.91,11.92l.37,19.85c.12,6,.36,12.35,3.87,17.19A11.2,11.2,0,0,0,71.73,132a223.06,223.06,0,0,0,31.72-18.77,61.19,61.19,0,0,0,11.46-10.58A4.48,4.48,0,0,0,116.22,100Z" />
        </g>{' '}
      </svg>
    ),
    feed: (
      <svg viewBox="0 0 200 200" style={style} className={className}>
        <g fill="none" strokeMiterlimit="10" strokeWidth="18">
          <rect x="9" y="9" width="182" height="182" rx="46" />
          <line x1="9" y1="63" x2="191" y2="63" />
        </g>
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" style={style} className={className}>
        <path
          strokeWidth="0.1"
          d="M16.839 4l4.857 8.5-4.857 8.5h-9.678l-4.857-8.5 4.857-8.5h9.678zm1.161-2h-12l-6 10.5 6 10.5h12l6-10.5-6-10.5z"
        />
      </svg>
    ),
    photo: (
      <svg viewBox="0 0 200 200" style={style} className={className}>
        <path
          d="M145,9H55A46,46,0,0,0,9,55v90a46,46,0,0,0,46,46h90a46,46,0,0,0,46-46V55A46,46,0,0,0,145,9ZM68,62a7,7,0,1,1-7,7A7,7,0,0,1,68,62Zm118.86,73.28M17.78,167.06a279.47,279.47,0,0,0,19-20.68c7.77-9.36,15.56-19.7,27-23.9a31.73,31.73,0,0,1,33.9,8.58c2.83,3.22,6.56,7.5,10.46,5.71a8.93,8.93,0,0,0,3.28-3.37,321,321,0,0,1,23-30.08c2.48-2.88,5.09-5.77,8.45-7.52,3.55-1.86,7.7-2.3,11.71-2.16,6.57.23,13.29,2,18.26,6.35,7.05,6.1,9.52,16.1,16.05,22.76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="18"
        />
      </svg>
    ),
    like: (
      <svg viewBox="0 0 237.37 200" style={style} className={className}>
        <g
          transform="translate(-7 0)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="23"
        >
          <g>
            <path d="M125,191,37.29,109" />
            <path d="M37.29,109A56,56,0,0,1,72,9c26.28,0,48,14.58,54,39" />
          </g>
          <g>
            <path d="M214.08,109,126.37,191" />
            <path d="M214.08,109A56,56,0,0,0,179.37,9C153.09,9,132,23.58,126,48" />
          </g>
        </g>
      </svg>
    ),
    repost: (
      <svg viewBox="0 0 238.5 200" style={style} className={className}>
        <path
          d="M239,100c0,4.27-5.87,8.28-5.87,8.28l-110.24,80s-3.64,2-6.25-.67a12.74,12.74,0,0,1-3.14-6.44V126.5c-.14,0-22.27,3.05-24.06,3.51a109.24,109.24,0,0,0-27.52,11.54c-14.68,8.49-26.87,19.89-40.4,29.93,2.23-3.93,1.26-9.55,1.81-13.91.84-6.67,1.77-13.33,3.09-19.92,2.63-13.2,6.83-26.31,14.64-37.4S59.9,80.63,71.68,73.87A250.53,250.53,0,0,1,94.76,62.51c1.58-.7,18.74-7,18.74-8V19.12S114,16,117.68,12.3s10,1.77,10,1.77L232.88,90.42S239,95.68,239,100Z"
          transform="translate(-11.02 -0.5)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="21"
        />
      </svg>
    ),
    clip: (
      <svg viewBox="0 0 225 260" style={style} className={className}>
        <path
          d="M148.33,82.37l-31.69,30.52L97,131.85c-8.8,9.44-13.81,28.69-2.81,39.29,12.5,12,30,9.63,42-1.93L152.79,152l32.1-33.13,25.86-26.68c.45-.44.9-.88,1.34-1.35a45.31,45.31,0,0,0,9-49.87,46.26,46.26,0,0,0-10.3-14.67l-.7-.68a49.71,49.71,0,0,0-68.43,0L46,117.72a46.52,46.52,0,0,0-7.42,9.2,63.72,63.72,0,0,0-19,45.28c0,36.13,30.56,65.42,68.25,65.42a70.09,70.09,0,0,0,38.73-11.54,42.25,42.25,0,0,0,13.66-8.79l72.88-70.2"
          transform="translate(-8.09 -0.5)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="21"
        />
      </svg>
    ),
    micro: (
      <svg viewBox="0 0 490.9 490.9" style={style} className={className}>
        <g>
          <g strokeWidth="17">
            <path
              d="M245.5,322.9c53,0,96.2-43.2,96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2,43.2-96.2,96.2v130.5
			C149.3,279.8,192.5,322.9,245.5,322.9z M173.8,96.2c0-39.5,32.2-71.7,71.7-71.7s71.7,32.2,71.7,71.7v130.5
			c0,39.5-32.2,71.7-71.7,71.7s-71.7-32.2-71.7-71.7V96.2z"
            />
            <path
              d="M94.4,214.5c-6.8,0-12.3,5.5-12.3,12.3c0,85.9,66.7,156.6,151.1,162.8v76.7h-63.9c-6.8,0-12.3,5.5-12.3,12.3
			s5.5,12.3,12.3,12.3h152.3c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3,151.1-76.9,151.1-162.8
			c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3c0,76.6-62.3,138.9-138.9,138.9s-138.9-62.3-138.9-138.9
			C106.6,220,101.2,214.5,94.4,214.5z"
            />
          </g>
        </g>
      </svg>
    ),
    send: (
      <svg
        style={style}
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <polygon
          fill="none"
          points="21.368 12.001 3 21.609 3 14 11 12 3 9.794 3 2.394"
        />
      </svg>
    ),
    preloader: (
      <svg
        className={className}
        style={style}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    ),
    'preloader-small': (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className={className}
        style={style}
      >
        <circle cx="84" cy="50" r="10" fill="#ccd5de">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.3623188405797101s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#ccd5de;#e5eaef;#e1e6ec;#d9e0e6;#ccd5de"
            begin="0s"
          />
        </circle>
        <circle cx="16" cy="50" r="10" fill="#ccd5de">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
        </circle>
        <circle cx="50" cy="50" r="10" fill="#d9e0e6">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3623188405797101s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3623188405797101s"
          />
        </circle>
        <circle cx="84" cy="50" r="10" fill="#e1e6ec">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.7246376811594202s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.7246376811594202s"
          />
        </circle>
        <circle cx="16" cy="50" r="10" fill="#e5eaef">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.0869565217391304s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.0869565217391304s"
          />
        </circle>
      </svg>
    ),
    'checkbox-checked': (
      <svg viewBox="0 0 50 50" className={className} style={style}>
        <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z" />
      </svg>
    ),
    'checkbox-unchecked': (
      <svg className={className} style={style} viewBox="0 0 50 50">
        <path d="M 11 4 C 7.1545455 4 4 7.1545455 4 11 L 4 39 C 4 42.845455 7.1545455 46 11 46 L 39 46 C 42.845455 46 46 42.845455 46 39 L 46 11 C 46 7.1545455 42.845455 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.754545 6 44 8.2454545 44 11 L 44 39 C 44 41.754545 41.754545 44 39 44 L 11 44 C 8.2454545 44 6 41.754545 6 39 L 6 11 C 6 8.2454545 8.2454545 6 11 6 z" />
      </svg>
    ),
    'exclamation-mark': (
      <svg
        version="1.1"
        viewBox="0 0 256 256"
        className={className}
        style={style}
      >
        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
          <path
            d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 50.427 70 H 39.573 V 59.927 h 10.854 V 70 z M 50.427 51.978 H 39.573 V 20 h 10.854 V 51.978 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
    info: (
      <svg className={className} style={style} viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z" />
      </svg>
    ),
    burger: (
      <svg viewBox="0 0 50 50" className={className} style={style}>
        <path d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z" />
      </svg>
    ),

    likeOff: (
      <svg
        className={className}
        style={style}
        focusable="false"
        viewBox="0 0 24 24"
        strokeWidth="0.1"
      >
        <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z" />
      </svg>
    ),

    likeOn: (
      <svg
        className={className}
        style={style}
        focusable="false"
        viewBox="0 0 24 24"
        strokeWidth="0.1"
      >
        <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />
      </svg>
    ),

    dislikeOff: (
      <svg
        className={className}
        style={style}
        focusable="false"
        viewBox="0 0 24 24"
        strokeWidth="0.1"
      >
        <path d="m10.89 18.28.57-2.89c.12-.59-.04-1.2-.42-1.66-.38-.46-.94-.73-1.54-.73H4v-1.08L6.57 6h8.09c.18 0 .34.16.34.34v7.84l-4.11 4.1M10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22zm10-7h2V4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z" />
      </svg>
    ),

    dislikeOn: (
      <svg
        className={className}
        style={style}
        focusable="false"
        viewBox="0 0 24 24"
        strokeWidth="0.1"
      >
        <path d="M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z" />
      </svg>
    ),

    more: (
      <svg
        className={className}
        style={style}
        focusable="false"
        viewBox="0 0 24 24"
      >
        <g>
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="21" r="2" />
          <circle cx="12" cy="3" r="2" />
        </g>
      </svg>
    ),

    checkboxChecked: (
      <svg className={className} style={style} viewBox="0 0 400 400">
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#77c0af"
          strokeMiterlimit="10"
          strokeWidth="15"
        />
        <polyline
          points="290 107 170 293 103 224"
          fill="none"
          stroke="#77c0af"
          strokeMiterlimit="10"
          strokeWidth="28"
        />
      </svg>
    ),

    checkboxUnchecked: (
      <svg className={className} style={style} viewBox="0 0 400 400">
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#e6e6e6"
          strokeMiterlimit="10"
          strokeWidth="15"
        />
      </svg>
    ),

    delete: (
      <svg
        className={className}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
      </svg>
    ),

    edit: (
      <svg
        className={className}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
      </svg>
    ),

    light_mode: (
      <svg className={className} style={style} viewBox="0 0 25 24">
        <path d="M12.3077 6.54545C9.29677 6.54545 6.85313 8.98909 6.85313 12C6.85313 15.0109 9.29677 17.4545 12.3077 17.4545C15.3186 17.4545 17.7622 15.0109 17.7622 12C17.7622 8.98909 15.3186 6.54545 12.3077 6.54545ZM1.39859 13.0909H3.58041C4.18041 13.0909 4.67131 12.6 4.67131 12C4.67131 11.4 4.18041 10.9091 3.58041 10.9091H1.39859C0.798587 10.9091 0.307678 11.4 0.307678 12C0.307678 12.6 0.798587 13.0909 1.39859 13.0909ZM21.035 13.0909H23.2168C23.8168 13.0909 24.3077 12.6 24.3077 12C24.3077 11.4 23.8168 10.9091 23.2168 10.9091H21.035C20.435 10.9091 19.944 11.4 19.944 12C19.944 12.6 20.435 13.0909 21.035 13.0909ZM11.2168 1.09091V3.27273C11.2168 3.87273 11.7077 4.36364 12.3077 4.36364C12.9077 4.36364 13.3986 3.87273 13.3986 3.27273V1.09091C13.3986 0.490909 12.9077 0 12.3077 0C11.7077 0 11.2168 0.490909 11.2168 1.09091ZM11.2168 20.7273V22.9091C11.2168 23.5091 11.7077 24 12.3077 24C12.9077 24 13.3986 23.5091 13.3986 22.9091V20.7273C13.3986 20.1273 12.9077 19.6364 12.3077 19.6364C11.7077 19.6364 11.2168 20.1273 11.2168 20.7273ZM5.75131 3.90545C5.32586 3.48 4.62768 3.48 4.21313 3.90545C3.78768 4.33091 3.78768 5.02909 4.21313 5.44364L5.3695 6.6C5.79495 7.02545 6.49313 7.02545 6.90768 6.6C7.32222 6.17455 7.33313 5.47636 6.90768 5.06182L5.75131 3.90545ZM19.2459 17.4C18.8204 16.9745 18.1222 16.9745 17.7077 17.4C17.2822 17.8255 17.2822 18.5236 17.7077 18.9382L18.864 20.0945C19.2895 20.52 19.9877 20.52 20.4022 20.0945C20.8277 19.6691 20.8277 18.9709 20.4022 18.5564L19.2459 17.4ZM20.4022 5.44364C20.8277 5.01818 20.8277 4.32 20.4022 3.90545C19.9768 3.48 19.2786 3.48 18.864 3.90545L17.7077 5.06182C17.2822 5.48727 17.2822 6.18545 17.7077 6.6C18.1331 7.01455 18.8313 7.02545 19.2459 6.6L20.4022 5.44364ZM6.90768 18.9382C7.33313 18.5127 7.33313 17.8145 6.90768 17.4C6.48222 16.9745 5.78404 16.9745 5.3695 17.4L4.21313 18.5564C3.78768 18.9818 3.78768 19.68 4.21313 20.0945C4.63859 20.5091 5.33677 20.52 5.75131 20.0945L6.90768 18.9382Z" />
      </svg>
    ),
    dark_mode: (
      <svg className={className} style={style} viewBox="0 0 25 24" fill="none">
        <path d="M12.3077 0C5.68107 0 0.307739 5.37333 0.307739 12C0.307739 18.6267 5.68107 24 12.3077 24C18.9344 24 24.3077 18.6267 24.3077 12C24.3077 11.3867 24.2544 10.7733 24.1744 10.1867C22.8677 12.0133 20.7344 13.2 18.3077 13.2C14.3344 13.2 11.1077 9.97333 11.1077 6C11.1077 3.58667 12.2944 1.44 14.1211 0.133333C13.5344 0.0533332 12.9211 0 12.3077 0Z" />
      </svg>
    ),
  };

  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id "${id}" doesn't exist`);
    return svgMap.placeholder;
  }

  return svgMap[id];
};

export default React.memo(SvgSelector);
