import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Search...' }: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        className={styles.searchInput}
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search"
      />
      <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20">
        <path
          fill="currentColor"
          d="M14.386 14.386l4.0877 4.0877-1.4142 1.4142-4.0877-4.0877c-2.9418 2.3144-7.1814 2.1381-9.8995-0.5802-2.9134-2.9134-2.9134-7.6366 0-10.55 2.9134-2.9134 7.6366-2.9134 10.55 0 2.7183 2.7181 2.8946 6.9577 0.5802 9.8995zm-1.4142-1.4142c2.1715-2.1715 2.1715-5.6923 0-7.8638-2.1715-2.1715-5.6923-2.1715-7.8638 0-2.1715 2.1715-2.1715 5.6923 0 7.8638 2.1715 2.1715 5.6923 2.1715 7.8638 0z"
        />
      </svg>
    </div>
  );
}
