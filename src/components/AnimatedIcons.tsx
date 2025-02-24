import React from 'react';
import styles from './AnimatedIcons.module.css';

export const AiAssistantIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.featureIcon}>
    <circle className={styles.pulse} cx="50" cy="50" r="40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2">
      <animate 
        attributeName="r" 
        values="35;40;35" 
        dur="2s" 
        repeatCount="indefinite"/>
      <animate 
        attributeName="opacity" 
        values="1;0.5;1" 
        dur="2s" 
        repeatCount="indefinite"/>
    </circle>
    <g className={styles.brain}>
      <path
        d="M35,50 Q50,35 65,50 Q50,65 35,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
        <animate
          attributeName="d"
          values="M35,50 Q50,35 65,50 Q50,65 35,50;M35,45 Q50,30 65,45 Q50,60 35,45;M35,50 Q50,35 65,50 Q50,65 35,50"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

export const ProjectManagementIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.featureIcon}>
    <g className={styles.chart}>
      <rect x="20" y="60" width="10" height="20" fill="currentColor">
        <animate
          attributeName="height"
          values="20;40;20"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="60;40;60"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="45" y="40" width="10" height="40" fill="currentColor">
        <animate
          attributeName="height"
          values="40;60;40"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="40;20;40"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="70" y="30" width="10" height="50" fill="currentColor">
        <animate
          attributeName="height"
          values="50;30;50"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="30;50;30"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  </svg>
);

export const CodeGenerationIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.featureIcon}>
    <g className={styles.code}>
      <path
        d="M30,50 L45,65 L30,80"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M70,50 L55,65 L70,80"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

export const TutorialIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.resourceIcon}>
    <g className={styles.book}>
      <path
        d="M30,20 L70,20 L70,80 L30,80 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
        <animate
          attributeName="d"
          values="M30,20 L70,20 L70,80 L30,80 Z;M35,20 L75,20 L75,80 L35,80 Z;M30,20 L70,20 L70,80 L30,80 Z"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      <line x1="40" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="2">
        <animate
          attributeName="x2"
          values="60;55;60"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
  </svg>
); 