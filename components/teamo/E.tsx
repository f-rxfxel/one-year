"use client";
import { useEffect } from "react";

export default function E() {
  useEffect(() => {
    const masks = ["E1", "E2", 'E3', 'E4', 'E5'];
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
      viewBox="0 0 208 196"
      className="fill-[var(--color-winter-highlight)] align-middle inline h-[1em]"
    >
      <defs>
        <g>
          <mask id="mask-marketing-E1">
            <path
              className="mask"
              id="mask-E1"
              d="M89.5 26C82.5 17 62.4531 2.90828 44.5341 18.2675C20.0342 39.2675 37.5342 59.7675 46.034 63.7675C57.5342 69.1794 71 77 105 71.5C124.651 68.3212 160.034 52.7675 184.034 37.7675C191.534 33.4341 206.234 21.6675 203.034 11.2675C199.834 0.867476 181.701 1.76748 175.034 2.26748C161.534 4.26748 152.411 8.37836 137 17C119.923 26.554 115.5 31.5 106.034 42.2675C102.034 48.7675 98 56 99.5 68"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth="9"
            />
          </mask>
          <mask id="mask-marketing-E2">
            <path
              className="mask"
              id="mask-E2"
              d="M98.5 70C99.5001 77 103.5 89.5 115 93C122.728 95.3519 124.307 88.2593 118 85.5C110 82 100 82.5 100 82.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="4"
            />
          </mask>
          <mask id="mask-marketing-E3">
            <path
              className="mask"
              id="mask-E3"
              d="M101.509 82.088C101.509 82.088 67.5091 79.485 32.0091 102.588C12.4132 115.341 5.26824 131.687 5.00901 142.088C4.82356 149.528 7.50674 157.588 12.5068 161.588C17.5069 165.588 25.5068 170.588 48.5068 170.588"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="10"
            />
          </mask>
          <mask id="mask-marketing-E4">
            <path
              className="mask"
              id="mask-E4"
              d="M47 172C79.5 169 90 156 102.5 146C110.185 139.852 120.6 120.9 107 110.5C96.5 102.471 77.4706 110.304 70.5 116.5C57 128.5 47 151.5 50 169"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="6"
            />
          </mask>
          <mask id="mask-marketing-E5">
            <path
              className="mask"
              id="mask-E5"
              d="M49.5 171C49.5 171 49.3001 178.08 49.4999 182C49.6997 185.92 50.4999 192 50.4999 192"
              strokeLinecap="square"
              strokeLinejoin="bevel"
                strokeWidth="6"
            />
          </mask>
        </g>
      </defs>
      <g>
        <path
          mask="url(#mask-marketing-E1)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-winter-highlight)'
          d="M181.969 1C197.428 1 205.779 6.86365 205.779 15.5703C205.779 37.2482 148.564 62.6582 101.477 70.1211L97.9229 70.6533C90.46 71.7194 83.1741 72.2529 76.5996 72.2529C33.0669 72.2528 32 46.3111 32 42.7568V42.4014C32 27.4756 44.7941 12.1943 64.1621 12.1943C74.4679 12.1944 84.5962 16.8148 89.9268 25.166L87.6162 26.4092C87.5732 26.3356 80.6355 14.5041 64.1621 14.5039C46.2156 14.5039 34.4883 28.5417 34.4883 42.4014C34.4883 46.133 34.8434 69.7656 77.3105 69.7656C83.7073 69.7656 90.4599 69.2322 97.7451 68.3438C97.5674 67.4554 97.5674 66.5671 97.5674 65.6787C97.5674 26.9428 145.365 1.00012 181.969 1ZM186.589 4.90918C158.159 4.90921 103.431 32.273 101.477 67.8105C148.208 60.3476 202.937 34.5829 202.937 15.748C202.937 15.0367 204.002 4.90918 186.589 4.90918Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-marketing-E2)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-winter-highlight)'
          d="M101.554 70C101.554 74.6197 102.621 78.3515 104.22 81.3721C122.698 82.0829 123.942 88.6566 123.942 90.4336C123.942 93.0988 121.633 95.2313 118.612 95.2314C114.348 95.2314 107.418 91.1445 102.62 83.6816L101.376 81.3721C99.7768 78.1737 98.5331 74.6191 98 70.5322C98 70.5322 98 70.5322 101.554 70ZM105.641 83.8594C109.905 90.0784 116.302 92.9209 118.612 92.9209C120.211 92.9208 121.633 91.855 121.633 90.4336C121.633 88.1236 117.901 84.7478 105.641 83.8594Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-marketing-E3)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-winter-highlight)'
          d="M102.46 83.3096H99.4395C45.0669 83.3096 10.2402 117.426 10.2402 143.724C10.2403 160.248 20.0132 169.311 44.001 169.311C45.5999 169.311 47.0211 169.133 48.4424 169.133V171.442C46.8434 171.62 45.4222 171.62 43.8232 171.62C18.5917 171.62 1.00017 161.67 1 143.901C1 116.182 42.4011 81.0002 100.505 81H101.216L102.46 83.3096Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-marketing-E4)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-winter-highlight)'
          d="M48.0007 169.079V168.724C48.0007 125.19 70.9231 106 95.444 106C106.283 106 114.634 112.397 114.634 123.591C114.634 146.512 80.8736 168.012 50.8444 171.211L48.0007 171.389C47.9982 171.389 48.0035 169.079 48.0007 169.079ZM95.444 108.31C78.0306 108.31 53.5098 126.079 50.8444 168.724C80.5182 165.703 112.324 144.38 112.324 123.591C112.324 113.818 105.039 108.31 95.444 108.31Z"
        />
      </g>
      <g>
        <path
          mask="url(#mask-marketing-E5)" strokeWidth="3" className="md:stroke-[0]" stroke='var(--color-winter-highlight)'
          d="M48.0007 171.389L50.8444 171.211C50.6667 172.81 50.6667 174.765 50.6667 176.542C50.6667 185.06 51.5521 191.806 51.5544 191.823L49.0671 192.179C48.534 187.204 48.0007 171.568 48.0007 171.389C48.0035 171.389 47.9982 171.389 48.0007 171.389Z"
        />
      </g>
    </svg>
  );
}
