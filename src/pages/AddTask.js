import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import './AddTask.css';

const AddTask = () => {
  const { addTask, editTask, getTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (id) {
      const task = getTask(id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
      }
    }
  }, [id, getTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const task = {
      id: id || Date.now().toString(),
      title,
      description,
      priority,
      completed: false
    };

    if (id) {
      editTask(task);
    } else {
      addTask(task);
    }
    
    navigate('/');
  };

  return (
    <div className="add-task-container">
      <h1>{id ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="priority">Prioridade:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-save">
            {id ? 'Salvar Alterações' : 'Adicionar Tarefa'}
          </button>
          <button type="button" className="btn-cancel" onClick={() => navigate('/')}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;