import { useState, useEffect } from 'react';
import './App.css';

const Header = () => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1>📰 Hacker News Reader</h1>
      <p>Top stories from the developer community</p>
    </header>
  );
};

// Step 1 & 2: Search with destructuring and controlled component
const Search = ({ searchTerm, onSearch }) => {
  const handleSearch = (event) => {
    const inputValue = event.target.value;
    onSearch(inputValue);
  };

  return (
    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      <label htmlFor="search">Search stories: </label>
      <input 
        type="text" 
        id="search" 
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: '8px', width: '300px', marginLeft: '10px' }}
      />
    </div>
  );
};

// Step 2: Item with destructuring
const Item = ({ story }) => {
  return (
    <article className="story-item">
      <h3>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h3>
      <div className="story-details">
        <span className="story-points">🔹 {story.points} points</span>
        <span className="story-author">by {story.author}</span>
        <span className="story-comments">💬 {story.num_comments} comments</span>
      </div>
    </article>
  );
};

// Step 2: List with destructuring
const List = ({ stories }) => {
  return (
    <div className="stories-list">
      {stories.map(story => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};

const App = () => {
  const stories = [
    {
      objectID: "12345",
      title: "React 19 Released: New Features and Improvements",
      url: "https://react.dev/blog/2024/12/05/react-19",
      author: "react-team",
      points: 343,
      num_comments: 89
    },
    {
      objectID: "12346",
      title: "TypeScript 5.5: What's New",
      url: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/",
      author: "typescript-team",
      points: 215,
      num_comments: 47
    },
    {
      objectID: "12347",
      title: "Understanding React Hooks: A Complete Guide",
      url: "https://react.dev/reference/react/hooks",
      author: "react-team",
      points: 156,
      num_comments: 23
    },
    {
      objectID: "12348",
      title: "Vite vs Create React App: Which One to Choose?",
      url: "https://vitejs.dev/guide/why.html",
      author: "vite-team",
      points: 98,
      num_comments: 15
    }
  ];

  // Step 4: Initialize state from localStorage (or empty string if nothing stored)
  const [searchTerm, setSearchTerm] = useState(() => {
    const saved = localStorage.getItem("search");
    return saved !== null ? saved : "";
  });

  // Step 5 & 6: useEffect to save to localStorage whenever searchTerm changes
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
    console.log("Saved to localStorage:", searchTerm);
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    console.log("Search term updated:", value);
  };

  const filteredStories = stories.filter((story) => {
    const title = story.title.toLowerCase();
    const search = searchTerm.toLowerCase();
    return title.includes(search);
  });

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;

/*
📌 WEEK 7 REFLECTION QUESTIONS

1. What is a controlled component?
   - An input whose value is controlled by React state
   - The value comes from state, not from the DOM
   - Updates happen via onChange handlers that update state

2. What is a side effect in React?
   - Anything that interacts with the outside world
   - Examples: localStorage, API calls, timers, console.log
   - Side effects belong in useEffect, not during rendering

3. Why do we use useEffect instead of calling code directly?
   - To avoid running side effects during every render
   - To prevent infinite loops
   - To control WHEN the effect runs (dependency array)
   - To keep rendering pure and predictable
*/