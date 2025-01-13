
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({ username: '', password: '' });
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    if (admin.username === 'admin' && admin.password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdmin({ username: '', password: '' });
  };

  
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.trim()) {
      setStudents((prev) => [...prev, newStudent]);
      setNewStudent('');
    }
  };

  const handleDeleteStudent = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    
    const savedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(savedStudents);
  }, []);

  useEffect(() => {
    
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <div className="app">
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={admin.username}
            onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <h2>Student Management</h2>
          <form onSubmit={handleAddStudent}>
            <input
              type="text"
              placeholder="Add Student Name"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
              required
            />
            <button type="submit">Add Student</button>
          </form>
          <table border="1">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student}</td>
                  <td>
                    <button onClick={() => handleDeleteStudent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
