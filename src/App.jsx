import { useState, useEffect } from 'react';
import './App.css';

// ============================================
// PART 1: Reusable InputWithLabel Component
// ============================================

// Step 1, 2, 3: Generic reusable component with children
const InputWithLabel = ({ 
  id, 
  type = "text",  // Step 2: Default type attribute
  value, 
  onInputChange, 
  children 
}) => {
  return (
    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder="Type to search..."
        style={{ padding: '8px', width: '300px', marginLeft: '10px' }}
      />
    </div>
  );
};

// ============================================
// Header Component
// ============================================
const Header = () => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1>📰 Hacker News Reader</h1>
      <p>Top stories from the developer community</p>
    </header>
  );
};

// ============================================
// Item Component (with delete button)
// ============================================
const Item = ({ story, onRemoveItem }) => {
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
        {/* Step 11: Delete button */}
        <button 
          onClick={() => onRemoveItem(story)}
          style={{ 
            marginLeft: '15px', 
            padding: '4px 8px', 
            backgroundColor: '#ff4444', 
            color: 'white', 
            border: 'none', 
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          ❌ Dismiss
        </button>
      </div>
    </article>
  );
};

// ============================================
// List Component
// ============================================
const List = ({ stories, onRemoveItem }) => {
  return (
    <div className="stories-list">
      {stories.map(story => (
        <Item 
          key={story.objectID} 
          story={story} 
          onRemoveItem={onRemoveItem}  // Step 10: Pass handler to Item
        />
      ))}
    </div>
  );
};

// ============================================
// Main App Component
// ============================================
const App = () => {
  // Step 6: Rename initial data
  const initialStories = [
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

  // Step 7: Create stories state
  const [stories, setStories] = useState(initialStories);

  // Search state with localStorage persistence
  const [searchTerm, setSearchTerm] = useState(() => {
    const saved = localStorage.getItem("search");
    return saved !== null ? saved : "";
  });

  // Save searchTerm to localStorage
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  // Step 8: Remove handler - filters out the removed item
  const handleRemoveStory = (storyToRemove) => {
    const updatedStories = stories.filter(
      (story) => story.objectID !== storyToRemove.objectID
    );
    setStories(updatedStories);
    console.log("Removed story:", storyToRemove.title);
  };

  // Search handler
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter stories based on searchTerm
  const filteredStories = stories.filter((story) => {
    const title = story.title.toLowerCase();
    const search = searchTerm.toLowerCase();
    return title.includes(search);
  });

  return (
    <div>
      <Header />
      
      {/* Step 4: Use composition with children */}
      <InputWithLabel
        id="search"
        type="text"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>🔍 Search stories:</strong>
      </InputWithLabel>
      
      <p>Showing {filteredStories.length} of {stories.length} stories</p>
      
      {/* Step 9: Pass remove handler to List */}
      <List stories={filteredStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

export default App;

// ============================================
// WEEK 8 REFLECTION QUESTIONS
// ============================================

/*
📌 WEEK 8 REFLECTION QUESTIONS

1. What makes a component reusable?
   - Generic props (not domain-specific names like "searchTerm")
   - Uses children for flexible content
   - No hard-coded values
   - Can be used in different contexts

2. What is component composition?
   - Using children prop to pass JSX content into a component
   - Allows flexible rendering without changing the component
   - Example: <InputWithLabel> <strong>Search:</strong> </InputWithLabel>

3. Why do we pass handlers down the component tree?
   - State lives in parent component (single source of truth)
   - Child components need to trigger parent state changes
   - Following "unidirectional data flow" pattern
   - Keeps state management centralized and predictable
*/