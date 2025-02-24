import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './courses.module.css';

// Icon components
function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2A10 10 0 1 1 11 1a10 10 0 0 1 0 20z" fill="currentColor"/>
      <path d="M20.293 19.293L16 15a1 1 0 0 0-1.414 1.414l4.293 4.293a1 1 0 0 0 1.414-1.414z" fill="currentColor"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm.5-9.5h-1v5l4.4 2.6.6-.9-4-2.3V4.5z" fill="currentColor"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
    </svg>
  );
}

const COURSES = [
  {
    title: 'AI Development Fundamentals',
    description: 'Master the basics of AI development with practical examples and real-world applications. Learn to build and deploy AI solutions.',
    videoId: 'to9iVovmBmo',
    duration: '2 hours',
    level: 'Beginner',
    instructor: 'Maya "Vector" Rodriguez'
  },
  {
    title: 'Revenue Generation with AI Tools',
    description: 'Learn how to build and monetize AI tools that solve real business problems. Create profitable solutions that scale.',
    videoId: 'to9iVovmBmo',
    duration: '3 hours',
    level: 'Intermediate',
    instructor: 'Marcus "Catalyst" Chen'
  },
  {
    title: 'Advanced AI Systems Design',
    description: 'Deep dive into building scalable AI systems and architectures. Master advanced concepts and implementations.',
    videoId: 'to9iVovmBmo',
    duration: '4 hours',
    level: 'Advanced',
    instructor: 'Sage "Architect" Zhang'
  },
];

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('all');

  const handleSearch = (text: string, type: string) => {
    setSearchText(text);
    setSearchType(type);
    onSearch({ text, type });
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search courses by title, description, or instructor..."
          onChange={(e) => handleSearch(e.target.value, searchType)}
          className={styles.searchInput}
        />
        <select 
          className={styles.searchTypeSelect}
          value={searchType}
          onChange={(e) => handleSearch(searchText, e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className={styles.card}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${course.videoId}`}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.courseLevel}>{course.level}</div>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.metadataContainer}>
          <div className={styles.metadata}>
            <div className={styles.metaItem}>
              <ClockIcon />
              <span>{course.duration}</span>
            </div>
            <div className={styles.metaItem}>
              <UserIcon />
              <span>{course.instructor}</span>
            </div>
          </div>
          <button className={styles.learnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Courses(): JSX.Element {
  const [searchParams, setSearchParams] = useState({ text: '', type: 'all' });

  const filteredCourses = COURSES.filter(course => {
    const searchString = searchParams.text.toLowerCase();
    const matchesText = searchString === '' || 
      course.title.toLowerCase().includes(searchString) ||
      course.description.toLowerCase().includes(searchString) ||
      course.instructor.toLowerCase().includes(searchString);
    
    const matchesType = searchParams.type === 'all' || course.level === searchParams.type;
    
    return matchesText && matchesType;
  });

  return (
    <Layout
      title="Courses"
      description="Learn AI development through our comprehensive courses">
      <main className={styles.container}>
        <div className={styles.header}>
          <h1>Interactive Courses</h1>
          <p>Master AI development through our comprehensive video courses and hands-on tutorials</p>
          <SearchBar onSearch={setSearchParams} />
        </div>
        <div className={styles.grid}>
          {filteredCourses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
