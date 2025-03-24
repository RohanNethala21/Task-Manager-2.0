import React, { createContext, useState, useContext, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = () => {
      const savedTasks = localStorage.getItem('taskManagerTasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      } else {
        const sampleTasks = [
          {
            id: 1,
            title: 'Complete Project Proposal',
            category: 'Work',
            dueDate: '2025-04-15',
            priority: 'high',
            completed: false,
          },
          {
            id: 2,
            title: 'Schedule Doctor Appointment',
            category: 'Personal',
            dueDate: '2025-03-25',
            priority: 'medium',
            completed: false,
          },
          {
            id: 3,
            title: 'Finish Reading Book',
            category: 'Personal',
            dueDate: '2025-04-01',
            priority: 'low',
            completed: true,
          },
        ];
        setTasks(sampleTasks);
        localStorage.setItem('taskManagerTasks', JSON.stringify(sampleTasks));
      }
      setLoading(false);
    };
    
    loadTasks();
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('taskManagerTasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(), 
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedTask } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      loading, 
      addTask, 
      deleteTask, 
      toggleTaskCompletion, 
      editTask 
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
