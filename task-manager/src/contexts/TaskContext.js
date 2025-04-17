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
            subtasks: [
              {
                id: 101,
                title: 'Research competitors',
                completed: true
              },
              {
                id: 102,
                title: 'Draft executive summary',
                completed: false
              }
            ],
            points: 10
          },
          {
            id: 2,
            title: 'Schedule Doctor Appointment',
            category: 'Personal',
            dueDate: '2025-03-25',
            priority: 'medium',
            completed: false,
            subtasks: [],
            points: 5
          },
          {
            id: 3,
            title: 'Finish Reading Book',
            category: 'Personal',
            dueDate: '2025-04-01',
            priority: 'low',
            completed: true,
            subtasks: [
              {
                id: 301,
                title: 'Read chapters 1-5',
                completed: true
              },
              {
                id: 302,
                title: 'Read chapters 6-10',
                completed: true
              }
            ],
            points: 3
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
      subtasks: [],
      points: task.priority === 'high' ? 10 : task.priority === 'medium' ? 5 : 3
    };
    
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        // If marking as complete, also mark all subtasks as complete
        if (!task.completed) {
          return { 
            ...task, 
            completed: true,
            subtasks: task.subtasks.map(subtask => ({
              ...subtask,
              completed: true
            }))
          };
        } else {
          return { ...task, completed: false };
        }
      }
      return task;
    }));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedTask } : task
    ));
  };

  // Add a subtask to a task
  const addSubtask = (taskId, subtask) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newSubtask = {
          ...subtask,
          id: Date.now(),
          completed: false
        };
        return {
          ...task,
          subtasks: [...task.subtasks, newSubtask]
        };
      }
      return task;
    }));
  };

  // Delete a subtask
  const deleteSubtask = (taskId, subtaskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          subtasks: task.subtasks.filter(subtask => subtask.id !== subtaskId)
        };
      }
      return task;
    }));
  };

  // Toggle subtask completion
  const toggleSubtaskCompletion = (taskId, subtaskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const updatedSubtasks = task.subtasks.map(subtask => 
          subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
        );
        
        // Check if all subtasks are completed
        const allSubtasksCompleted = updatedSubtasks.length > 0 && 
          updatedSubtasks.every(subtask => subtask.completed);
        
        return {
          ...task,
          subtasks: updatedSubtasks,
          // If all subtasks are completed, mark the main task as completed too
          completed: allSubtasksCompleted
        };
      }
      return task;
    }));
  };

  // Edit a subtask
  const editSubtask = (taskId, subtaskId, updatedSubtask) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          subtasks: task.subtasks.map(subtask => 
            subtask.id === subtaskId ? { ...subtask, ...updatedSubtask } : subtask
          )
        };
      }
      return task;
    }));
  };

  // Calculate total tasks count
  const getTotalTasksCount = () => {
    return tasks.length;
  };

  // Calculate completed tasks percentage
  const getCompletionPercentage = () => {
    if (tasks.length === 0) return 0;
    
    const completedTasks = tasks.filter(task => task.completed).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  // Calculate total points earned
  const getTotalPoints = () => {
    return tasks
      .filter(task => task.completed)
      .reduce((total, task) => total + (task.points || 0), 0);
  };

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      loading, 
      addTask, 
      deleteTask, 
      toggleTaskCompletion, 
      editTask,
      addSubtask,
      deleteSubtask,
      toggleSubtaskCompletion,
      editSubtask,
      getTotalTasksCount,
      getCompletionPercentage,
      getTotalPoints
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
