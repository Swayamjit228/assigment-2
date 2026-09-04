import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";



const StudentContext = createContext();

function StudentProvider({ children }) {
  const [student] = useState({
    name: "Swayamjit",
    email: "swayamjit@example.com",
    studentId: "STU101",
  });

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}



function Home() {
  const student = useContext(StudentContext);

  return (
    <div className="page">
      <h1>Student Course Management</h1>

      <div className="card">
        <h2>Welcome, {student.name}!</h2>
        <p><b>Student ID:</b> {student.studentId}</p>
        <p><b>Email:</b> {student.email}</p>
      </div>

      <h2>Available Courses</h2>

      <div className="courses">
        <Link to="/course/101" className="course-card">
          <h3>React Development</h3>
          <p>Learn React and build modern web applications.</p>
        </Link>

        <Link to="/course/102" className="course-card">
          <h3>Python Programming</h3>
          <p>Learn Python programming from basics.</p>
        </Link>
      </div>
    </div>
  );
}

// ====================
// Courses Page
// ====================

function Courses() {
  return (
    <div className="page">
      <h1>Courses</h1>

      <div className="courses">
        <Link to="/course/101" className="course-card">
          <h2>React Development</h2>
          <p>Course ID: 101</p>
          <p>Learn React, JSX, Hooks and Routing.</p>
        </Link>

        <Link to="/course/102" className="course-card">
          <h2>Python Programming</h2>
          <p>Course ID: 102</p>
          <p>Learn Python fundamentals and programming.</p>
        </Link>
      </div>
    </div>
  );
}



function CourseDetails() {
  const { id } = useParams();
  const student = useContext(StudentContext);

  const courses = {
    101: {
      name: "React Development",
      description:
        "Learn React, components, JSX, Hooks, Context API and React Router.",
    },
    102: {
      name: "Python Programming",
      description:
        "Learn Python basics, variables, functions, loops and object-oriented programming.",
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="page">
        <h1>Course Not Found</h1>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        <h1>{course.name}</h1>
        <p><b>Course ID:</b> {id}</p>
        <p>{course.description}</p>

        <hr />

        <h3>Student Information</h3>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Student ID:</b> {student.studentId}</p>

        <button>Enroll in Course</button>
      </div>
    </div>
  );
}



function About() {
  const student = useContext(StudentContext);

  return (
    <div className="page">
      <h1>About</h1>

      <div className="card">
        <h2>Student Course Management Application</h2>

        <p>
          This application allows students to explore and manage their
          courses.
        </p>

        <h3>Shared Student Information</h3>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Student ID:</b> {student.studentId}</p>
      </div>
    </div>
  );
}



function App() {
  return (
    <StudentProvider>
      <BrowserRouter>

        <nav>
          <h2>Student Portal</h2>

          <div>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/course/:id" element={<CourseDetails />} />

          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </StudentProvider>
  );
}



const style = document.createElement("style");

style.textContent = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    color: #222;
  }

  nav {
    background: #2563eb;
    color: white;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav h2 {
    margin: 0;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    font-weight: bold;
  }

  nav a:hover {
    text-decoration: underline;
  }

  .page {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
  }

  .page h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  }

  .courses {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .course-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    text-decoration: none;
    color: #222;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: 0.3s;
  }

  .course-card:hover {
    transform: translateY(-5px);
  }

  .course-card h2,
  .course-card h3 {
    color: #2563eb;
  }

  button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background: #1d4ed8;
  }

  @media (max-width: 600px) {
    nav {
      padding: 15px;
      flex-direction: column;
      gap: 15px;
    }

    nav a {
      margin: 0 8px;
    }

    .courses {
      grid-template-columns: 1fr;
    }
  }
`;

document.head.appendChild(style);

export default App;