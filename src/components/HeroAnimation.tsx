import React from 'react';
import styles from './HeroAnimation.module.css';

export const HeroAnimation = () => (
  <div className={styles.heroAnimation}>
    <svg viewBox="0 0 800 400" className={styles.animatedSvg}>
      {/* Code Window - Made larger */}
      <rect 
        x="50" 
        y="25" 
        width="350" 
        height="350" 
        rx="12" 
        className={styles.codeWindow}
      />
      <rect 
        x="50" 
        y="25" 
        width="350" 
        height="40" 
        rx="12" 
        className={styles.windowHeader}
      />
      
      {/* Code Lines - Adjusted positions and made longer */}
      <g className={styles.codeLines}>
        <rect x="80" y="100" width="290" height="6" rx="3">
          <animate
            attributeName="width"
            values="0;290;290;290"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="80" y="130" width="250" height="6" rx="3">
          <animate
            attributeName="width"
            values="0;250;250;250"
            dur="4s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="4s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="80" y="160" width="290" height="6" rx="3">
          <animate
            attributeName="width"
            values="0;290;290;290"
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* Deployment Path - Made smoother with a loop */}
      <path
        d="M400 200 C 500 200, 600 150, 700 150 C 750 150, 775 175, 775 200 C 775 225, 750 250, 700 250 C 600 250, 500 200, 400 200"
        fill="none"
        className={styles.deployPath}
        pathLength="1"
      />

      {/* Moving Code Block - Updated animation */}
      <g className={styles.codeBlock}>
        <rect x="0" y="0" width="40" height="40" rx="6">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M400 200 C 500 200, 600 150, 700 150 C 750 150, 775 175, 775 200 C 775 225, 750 250, 700 250 C 600 250, 500 200, 400 200"
            rotate="auto"
          >
            <mpath href="#motionPath" />
          </animateMotion>
        </rect>
      </g>

      {/* Cloud Platform - Made larger */}
      <g className={styles.cloudPlatform}>
        <path 
          d="M650,200 a60,30 0 1,1 120,0 a60,30 0 1,1 -120,0"
          id="motionPath">
          <animate
            attributeName="d"
            values="M650,200 a60,30 0 1,1 120,0 a60,30 0 1,1 -120,0;M645,200 a65,33 0 1,1 130,0 a65,33 0 1,1 -130,0;M650,200 a60,30 0 1,1 120,0 a60,30 0 1,1 -120,0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  </div>
); 