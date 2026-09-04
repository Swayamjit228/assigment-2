import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [student, setStudent] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent(formData);
  };

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f2f4f7;
          }

          .container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .form-box {
            width: 400px;
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          }

          h1 {
            text-align: center;
            margin-bottom: 25px;
          }

          label {
            display: block;
            margin: 15px 0 6px;
            font-weight: bold;
          }

          input, select {
            width: 100%;
            padding: 11px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
          }

          button {
            width: 100%;
            margin-top: 25px;
            padding: 12px;
            border: none;
            border-radius: 6px;
            background: #2563eb;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background: #1d4ed8;
          }

          .result {
            margin-top: 25px;
            padding: 20px;
            background: #eef6ff;
            border-radius: 8px;
          }
        `}
      </style>

      <div className="container">
        <div className="form-box">
          <h1>Student Registration Form</h1>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Civil">
                Civil
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
            </select>

            <button type="submit">Register</button>
          </form>

          {student && (
            <div className="result">
              <h2>Submitted Student Details</h2>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Course:</strong> {student.course}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;