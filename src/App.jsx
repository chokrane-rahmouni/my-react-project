// Step 3: Variable outside the component
const courseTitle = "React Development";

// Main App component
function App() {
  // Step 2: Variable inside the component
  const studentName = "Chokrane Rahmouni";
  
  // Step 6: JavaScript object
  const student = {
    name: "Chokrane Rahmouni",
    age: 20,
    track: "Computer Science"
  };
  
  // Step 7: Functions
  function sayHello() {
    return `Hello, I'm ${studentName} and I'm learning ${courseTitle}!`;
  }
  
  function greetStudent() {
    return `Welcome back, ${student.name} from ${student.track}!`;
  }
  
  // The return statement (JSX)
  return (
    <div>
      {/* Step 1: Simple title */}
      <h1>My First React Component</h1>
      
      {/* Step 2: Display variable inside component */}
      <p>Student: {studentName}</p>
      
      {/* Step 3: Display variable outside component */}
      <p>Course: {courseTitle}</p>
      
      {/* Step 4: Dynamic content with both variables */}
      <p>Welcome to {courseTitle}, {studentName}!</p>
      
      {/* Step 5: Form elements */}
      <div>
        <label htmlFor="studentInput">Student Name:</label>
        <input type="text" id="studentInput" placeholder="Enter your name" />
      </div>
      
      {/* Step 6: Display object properties */}
      <div>
        <h3>Student Information:</h3>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Track: {student.track}</p>
      </div>
      
      {/* Step 7: Function calls */}
      <div>
        <h3>Messages:</h3>
        <p>{sayHello()}</p>
        <p>{greetStudent()}</p>
      </div>
    </div>
  );
}

// Export the component
export default App;

/*
Step 8: Reflection Questions
1. One thing I understand well in this lab:
   - How to use {} to display JavaScript variables and expressions in JSX

2. One thing that is still confusing:
   - Why React re-renders automatically when variables change

3. One mistake I made and fixed:
   - Forgot to wrap multiple elements in a single parent div
*/