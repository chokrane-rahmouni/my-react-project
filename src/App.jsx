import './App.css';

// Step 1: Global stories array (stays the same)
const stories = [
  {
    objectID: "12345",
    title: "React 19 Released: New Features and Improvements",
    url: "https://reactjs.org/blog/2024/react-19",
    author: "react-team",
    points: 343,
    num_comments: 89
  },
  {
    objectID: "12346",
    title: "TypeScript 5.5: What's New",
    url: "https://typescriptlang.org/docs/",
    author: "typescript-team",
    points: 215,
    num_comments: 47
  },
  {
    objectID: "12347",
    title: "Understanding React Hooks: A Complete Guide",
    url: "https://dev.to/react-hooks-guide",
    author: "devcommunity",
    points: 156,
    num_comments: 23
  },
  {
    objectID: "12348",
    title: "Vite vs Create React App: Which One to Choose?",
    url: "https://vitejs.dev/comparison",
    author: "vite-team",
    points: 98,
    num_comments: 15
  }
];

// Step 5: Header Component (Mini Challenge)
function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1>📰 Hacker News Reader</h1>
      <p>Top stories from the developer community</p>
    </header>
  );
}

// Step 3: Search Component (UI only, no functionality yet)
function Search() {
  return (
    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      <label htmlFor="search">Search stories: </label>
      <input 
        type="text" 
        id="search" 
        placeholder="Search will work later..."
        style={{ padding: '8px', width: '300px', marginLeft: '10px' }}
      />
    </div>
  );
}

// Step 1: List Component (renders stories using global variable)
function List() {
  return (
    <div className="stories-list">
      {stories.map(story => (
        <article key={story.objectID} className="story-item">
          <h3>
            <a 
              href={story.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {story.title}
            </a>
          </h3>
          <div className="story-details">
            <span className="story-points">🔹 {story.points} points</span>
            <span className="story-author">by {story.author}</span>
            <span className="story-comments">💬 {story.num_comments} comments</span>
          </div>
        </article>
      ))}
    </div>
  );
}

// Step 4: Main App Component (now clean and simple!)
function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;

/*
Step 4: Reflection Questions

What does App do now?
- App is now the "master component" that organizes the page structure
- It renders Header, Search, and List in the correct order
- It no longer contains rendering logic, just composition

What does List do?
- List is responsible for rendering all the stories
- It uses the global stories array and maps through it
- It handles the display of each story's details

What does Search do?
- Search renders the search input UI
- Currently just a label and input (functionality comes later)
- Its responsibility is the search interface only

Why is this structure cleaner than before?
1. Each component has ONE job (Single Responsibility Principle)
2. App.jsx is shorter and easier to read (from ~100 lines to ~30 lines)
3. Easy to find code (want to change search? Go to Search component)
4. Reusable components (can use <Header /> anywhere)
5. Easier to debug (issues isolated to specific components)
*/
