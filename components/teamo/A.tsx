"use client";
import { useEffect } from "react";

export default function A() {
    useEffect(() => {
    const masks = ["A1", "A2", 'A3', 'A4'];
    masks.forEach((mask) => {
      const id = `#mask-${mask}`;
      const path = document.querySelector(id) as SVGPathElement | null;
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      }
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 308 182"
      className="fill-[var(--color-spring-highlight)] align-middle inline h-[1em]"
    >
      <defs>
        <g>
          <mask id="mask-teamo-A1">
            <path
              className="mask"
              id="mask-A1"
              d="M4.50048 143.5C2.83381 152 5.19979 171.2 27.9998 174C50.7998 176.8 115.5 120.833 145 92.5C183.167 62.3334 268 2.30002 302 3.50002C276.5 21 263 34.5 232 62C210.167 95 176 122.5 166 181.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="10"
            />
          </mask>
        </g>
        <g>
          <mask id="mask-teamo-A2">
            <path
              className="mask"
              id="mask-A2"
              d="M167 164.5L165.5 142"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="10"
            />
          </mask>
        </g>
        <g>
          <mask id="mask-teamo-A3">
            <path
              className="mask"
              id="mask-A3"
              d="M168 144.5C164 118.667 150.4 61.85 127 47C103.6 32.15 72.5008 26.5 51.5007 44.5C24.5009 67.6425 35.5386 92.5 37.9998 100.5C40.461 108.5 56.5 133.5 92.5 142C121.3 148.8 149.551 144.754 165.5 142.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="6"
            />
          </mask>
        </g>
        <g>
          <mask id="mask-teamo-A4">
            <path
              className="mask"
              id="mask-A4"
              d="M166.5 143C178.833 141.333 207.2 132.8 218 118"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="10"
            />
          </mask>
        </g>
      </defs>
      <g>
        <path
          mask="url(#mask-teamo-A1)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-spring-highlight)'
          d="M306 3.95605C296.583 9.29072 223.204 51.4348 185.537 136.078L184.293 138.745C178.785 151.548 174.166 165.241 170.612 180H161.196C162.618 174.488 164.039 168.619 165.993 163.106L167.77 158.128C169.724 152.438 172.034 146.925 174.521 141.591L175.588 139.101C203.66 79.3525 258.029 29.5625 298.538 5.73438C242.749 20.1379 200.107 53.5684 155.333 89.3105L153.556 90.7334C152.845 91.2668 152.134 91.8005 151.424 92.5117C134.723 104.959 113.757 123.986 92.2588 140.701L90.3037 142.302C66.6731 160.44 43.0426 175.377 24.7422 175.377C11.9497 175.377 2 166.841 2 152.971C2.00003 150.126 2.35592 147.103 3.42188 143.725L5.37598 144.08C5.3756 144.437 4.13184 148.527 4.13184 153.327C4.13212 172.709 21.5439 173.064 24.7422 173.064C40.7328 173.064 55.48 160.262 68.2725 151.549L82.6641 140.346L152.845 82.7314C248.075 9.11559 303.686 2.00049 305.467 2L306 3.95605Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-teamo-A2)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-spring-highlight)'
          d="M166.717 143.084L167.783 158.01L166.006 162.985C165.65 156.589 165.296 150.014 164.585 143.617L166.717 143.084Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-teamo-A3)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-spring-highlight)'
          d="M84.4473 31.1406C123.006 31.1406 142.018 57.4392 152.857 82.6709L155.345 89.2451C161.564 105.592 164.762 123.361 166.539 140.952L166.717 143.084L164.585 143.617C153.568 145.572 142.018 146.638 130.469 146.638C116.431 146.638 102.571 145.039 90.3105 142.196L82.6709 140.241C31.8521 125.138 31.4961 84.4469 31.4961 79.1162C31.4963 47.488 58.5049 31.1406 84.4473 31.1406ZM88.1787 34.3389C76.2736 34.3389 36.2939 40.7363 36.2939 81.7822C36.294 87.2915 36.4722 125.138 84.4473 138.643L92.2656 140.597C103.815 143.084 116.787 144.328 130.113 144.328C141.485 144.328 153.213 143.44 164.407 141.308C162.63 124.072 159.432 106.836 153.568 90.666L151.08 84.0918C136.687 49.2651 113.766 34.3389 88.1787 34.3389Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-teamo-A4)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-spring-highlight)'
          d="M217.714 119.63C209.54 127.981 197.99 134.2 184.308 138.643L174.535 141.485C171.87 142.018 169.382 142.729 166.717 143.084L166.539 140.952C169.56 140.419 172.581 139.708 175.602 138.997L185.552 135.977C197.99 131.712 208.651 125.849 216.114 118.208L217.714 119.63Z"
        />
      </g>
    </svg>
  );
}
