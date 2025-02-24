import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Courses(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Courses"
      description="Learn engineering through structured courses">
      <main className="container margin-vert--lg">
        <h1>Courses</h1>
        <p>Coming soon! Our structured learning paths will help you master engineering concepts step by step.</p>
      </main>
    </Layout>
  );
}
