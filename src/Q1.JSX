import React from 'react';


const Student = ({ name, course, college }) => {
  return (
    
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Student Profile </h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>College:</strong> {college}</p>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Student Detail</h2>
      
      {/* 4. Create and display at least two Student components from the App component */}
      <Student 
        name="Swayamjit" 
        course="CSEAIML" 
        college="GIETU" 
      />
      
      <Student 
        name="Manas" 
        course="CSEAIML" 
        college="GIETU" 
      />
    </div>
  );
};

export default App;