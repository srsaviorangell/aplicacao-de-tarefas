import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';
import './Home.css';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <Link to="/add-task" className="btn-add">
        Adicionar Nova Tarefa
      </Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;