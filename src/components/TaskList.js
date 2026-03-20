import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p className="empty-list">Nenhuma tarefa encontrada. Adicione uma nova tarefa!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;