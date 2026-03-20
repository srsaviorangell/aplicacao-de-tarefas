import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<AddTask />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;