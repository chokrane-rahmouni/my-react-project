import { useState } from 'react';
import './App.css';

const Header = () => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1>📰 Hacker News Reader</h1>
      <p>Top stories from the developer community</p>
    </header>
  );
};

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    const inputValue = event.target.value;
    console.log("🔍 Searching for:", inputValue);
    onSearch(event);
  };

  return (
    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      <label htmlFor="search">Search stories: </label>
      <input 
        type="text" 
        id="search" 
        placeholder="Type to search..."
        style={{ padding: '8px', width: '300px', marginLeft: '10px' }}
        onChange={handleSearch}
      />
    </div>
  );
};

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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const filteredStories = stories.filter((story) => {
    const title = story.title.toLowerCase();
    const search = searchTerm.toLowerCase();
    return title.includes(search);
  });

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;

/*
WEEK 6 REFLECTION QUESTIONS

1. What is the difference between props and state?
   - Props are passed FROM parent TO child (read-only)
   - State is managed INSIDE a component (can change)

2. Why do we lift state up?
   - To share data between multiple components
   - To keep a single source of truth

3. Where should filtering logic live?
   - In the component that OWNS the data (App)
   - Before passing data down to children
*/