import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const { removeTask } = useContext(TaskContext);

  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <div className={`task-item ${getPriorityClass(task.priority)}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span className="task-priority">Prioridade: {task.priority}</span>
      </div>
      <div className="task-actions">
        <Link to={`/edit-task/${task.id}`} className="btn-edit">
          Editar
        </Link>
        <button onClick={() => removeTask(task.id)} className="btn-delete">
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TaskItem;