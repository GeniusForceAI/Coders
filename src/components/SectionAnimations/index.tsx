import React from 'react';
import styles from './styles.module.css';

export const WorkflowAnimation = () => (
  <svg viewBox="0 0 400 300" className={styles.sectionAnimation}>
    {/* Workflow visualization */}
    <g className={styles.workflow}>
      {/* Task Board */}
      <rect x="50" y="50" width="120" height="200" rx="10" className={styles.board} />
      <rect x="60" y="70" width="100" height="30" rx="5" className={styles.card}>
        <animate
          attributeName="y"
          values="70;70;150;150;70"
          dur="6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="60" y="110" width="100" height="30" rx="5" className={styles.card} />
      <rect x="60" y="150" width="100" height="30" rx="5" className={styles.card} />
      
      {/* Arrow Path */}
      <path 
        d="M180 100 C 230 100, 250 150, 300 150" 
        className={styles.arrow}
        pathLength="1"
      />
      
      {/* IDE Window */}
      <rect x="230" y="50" width="120" height="200" rx="10" className={styles.ide} />
      <g className={styles.codeLines}>
        <rect x="240" y="70" width="80" height="4" rx="2">
          <animate
            attributeName="width"
            values="0;80;80;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="240" y="85" width="100" height="4" rx="2">
          <animate
            attributeName="width"
            values="0;100;100;0"
            dur="4s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </g>
  </svg>
);

export const IssueTrackingAnimation = () => (
  <svg viewBox="0 0 400 300" className={styles.sectionAnimation}>
    {/* Issue tracking visualization */}
    <g className={styles.issueTracking}>
      {/* Issue Form */}
      <rect x="50" y="50" width="150" height="200" rx="10" className={styles.form} />
      
      {/* AI Processing */}
      <g className={styles.aiProcess} transform="translate(220, 150)">
        <circle r="30" className={styles.aiCircle}>
          <animate
            attributeName="r"
            values="30;35;30"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <path 
          d="M-15,-15 L15,15 M-15,15 L15,-15" 
          className={styles.aiCross}
        />
      </g>
      
      {/* Smart Suggestions */}
      <g className={styles.suggestions}>
        <rect x="280" y="70" width="100" height="20" rx="5" className={styles.suggestion}>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="280" y="100" width="80" height="20" rx="5" className={styles.suggestion}>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </g>
  </svg>
);

export const CodeIntegrationAnimation = () => (
  <svg viewBox="0 0 400 300" className={styles.sectionAnimation}>
    {/* Code integration visualization */}
    <g className={styles.codeIntegration}>
      {/* VSCode Window */}
      <rect x="50" y="50" width="140" height="200" rx="10" className={styles.vscode} />
      <g className={styles.codeEditor}>
        <rect x="60" y="70" width="120" height="4" rx="2" className={styles.codeLine}>
          <animate
            attributeName="width"
            values="0;120;120;120"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      
      {/* Connection Lines */}
      <path 
        d="M200 150 C 250 150, 270 100, 320 100" 
        className={styles.connectionPath}
      />
      
      {/* Git/Branch Visual */}
      <g className={styles.gitBranch} transform="translate(320, 100)">
        <circle r="5" className={styles.commit} />
        <path d="M0,0 L30,30" className={styles.branch} />
        <circle r="5" cx="30" cy="30" className={styles.commit}>
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
  </svg>
); 