import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Workflows',
    icon: '🤖',
    description: (
      <>
        Stop drowning in Jira tickets. Let AI help you prioritize, 
        summarize, and manage your development tasks more effectively.
      </>
    ),
  },
  {
    title: 'Ready-to-Use AI Prompts',
    icon: '💡',
    description: (
      <>
        Every concept comes with battle-tested AI prompts. Copy, paste, 
        and immediately start improving your development workflow.
      </>
    ),
  },
  {
    title: 'Real-World Case Studies',
    icon: '📈',
    description: (
      <>
        Learn from real development teams who have transformed their 
        shipping velocity with AI-assisted project management.
      </>
    ),
  },
  {
    title: 'Developer-First Approach',
    icon: '👩‍💻',
    description: (
      <>
        Built by developers, for developers. No marketing fluff - just 
        practical solutions to real development challenges.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    icon: '🔌',
    description: (
      <>
        Our VSCode extension brings AI-powered project management right 
        into your development environment. No context switching required.
      </>
    ),
  },
  {
    title: 'Ship With Confidence',
    icon: '🚢',
    description: (
      <>
        Focus on writing great code while AI handles the cognitive overhead 
        of project management and documentation.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
