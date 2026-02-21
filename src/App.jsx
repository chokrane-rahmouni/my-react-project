import './App.css';
// Step 1: Data structure explanation (as comment)
/*
Hacker News displays technology news and articles.
Each post shows: title, link, author, points, comments.

The objectID property should be used as the React key because:
- It's unique for each item
- It's stable (doesn't change)
- React uses it to track which items changed

This structure is realistic because it matches the actual Hacker News API format.
*/

// Step 2: Fake data outside the component
const stories = [
  {
    objectID: "12345",
    title: "React 19 Released: New Features and Improvements",
    url: "https://reactjs.org/blog/2024/react-19",
    author: "react-team",
    points: 342,
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

// Main App component
function App() {
  // Step 3: Render the list using map()
  console.log("Stories data:", stories); // Debug: log to console
  
  return (
    <div>
      <h1>Hacker News Stories</h1>
      
      {/* Step 3 & 4 & 5: map() with proper keys */}
      <div className="stories-list">
        {stories.map(story => (
          // Step 5: KEY IS HERE - using objectID
          <article key={story.objectID} className="story-item">
            {/* Step 4: Title as clickable link */}
            <h3>
              <a 
                href={story.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {story.title}
              </a>
            </h3>
            
            {/* Step 4: Display all story details */}
            <div className="story-details">
              <span className="story-points">🔹 {story.points} points</span>
              <span className="story-author">by {story.author}</span>
              <span className="story-comments">💬 {story.num_comments} comments</span>
            </div>
          </article>
        ))}
      </div>

    {/* Step 6: Mini Challenge - Show what you did */}
      <div style={{ marginTop: "30px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
        <h2>Step 6: Mini Challenge Complete</h2>
        <p>✅ Added a new story object (4th one)</p>
        <p>✅ Increased points of first story from 342 to 343</p>
        <p>✅ UI updates automatically in browser</p>
      </div>
    </div>
  );
}

export default App;

/*
Step 7: Reflection Questions

1. Why is map() essential for rendering lists in React?
   - map() transforms an array of data into an array of JSX elements
   - It's declarative: we describe what each item should look like
   - React efficiently updates only items that changed

2. Why is objectID the correct key?
   - It's unique (no duplicates)
   - It's stable (doesn't change when list order changes)
   - React uses keys to identify which items to re-render
   - Using index as key can cause bugs with dynamic lists

3. What will change when we replace fake data with the Hacker News API?
   - Data will come from an API call (fetch/axios)
   - Need to handle loading and error states
   - Data might change frequently (new stories)
   - We'll need to manage state (useState, useEffect)
   - The rendering logic (map) stays exactly the same!
*/

// Step 8: Git commands (run in terminal)
/*
git add .
git commit -m "Week 3: Rendering Hacker News style lists"
git push
*/