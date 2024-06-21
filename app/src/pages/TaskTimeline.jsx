import React, { useState } from 'react';
import TaskModal from './TaskModal';
import './TaskTimeline.scss';

const TaskTimeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const tasks = [
    { id: 1, title: 'НАЗВАНИЕ ЗАДАНИЯ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'ЗАДАНИЕ ВЫПОЛНЕНО', className: '' },
    { id: 2, title: 'НАЗВАНИЕ ЗАДАНИЯ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: '', className: 'completed' },
    { id: 3, title: 'НАЗВАНИЕ ЗАДАНИЯ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: '', className: 'completed' },
    { id: 4, title: 'НАЗВАНИЕ ЗАДАНИЯ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: '', className: 'completed' },
    { id: 5, title: 'НАЗВАНИЕ ЗАДАНИЯ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: '', className: 'completed' }
  ];

  const openModal = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTask(null);
  };

  return (
    <div className="timeline-container">
      <h1 className="job-title">НАЗВАНИЕ ВАКАНСИИ</h1>
      <p className="job-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="timeline">
        {tasks.map((task) => (
          <div key={task.id} className={`timeline-item ${task.className}`}>
            <div className="circle"></div>
            <div className="content">
              <h2 className="task-title">{task.title}</h2>
              {task.status && <p className="task-status">{task.status}</p>}
              <button className={`view-task ${task.className}`} onClick={() => openModal(task)}>
                Посмотреть задание
              </button>
            </div>
          </div>
        ))}
      </div>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} task={currentTask} />
    </div>
  );
};

export default TaskTimeline;
