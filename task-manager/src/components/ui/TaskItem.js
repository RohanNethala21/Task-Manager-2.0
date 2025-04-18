import React, { useState } from 'react';
import styled from 'styled-components';
import Subtasks from './Subtasks';
import { useTask } from '../../contexts/TaskContext';
import PropTypes from 'prop-types';
const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
  border-left: 4px solid ${props => {
    switch (props.priority) {
      case 'high':
        return props.theme.colors.warning;
      case 'medium':
        return props.theme.colors.highPriority;
      case 'low':
        return props.theme.colors.success;
      default:
        return props.theme.colors.lightGray;
    }
  }};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TaskMainContent = styled.div`
  display: flex;
  align-items: center;
`;

const TaskCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.completed ? props.theme.colors.success : props.theme.colors.lightGray};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.completed ? props.theme.colors.success : 'transparent'};
  
  svg {
    display: ${props => props.completed ? 'block' : 'none'};
  }
`;

const TaskContent = styled.div`
  flex: 1;
`;

const TaskTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 5px 0;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? props.theme.colors.darkGray : props.theme.colors.text};
`;

const TaskDetails = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
`;

const TaskCategory = styled.span`
  margin-right: 15px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 5px;
  }
`;

const TaskDueDate = styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.overdue ? props.theme.colors.warning : props.theme.colors.darkGray};
  font-weight: ${props => props.overdue ? 'bold' : 'normal'};
  
  svg {
    margin-right: 5px;
  }
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.darkGray};
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const AddSubtaskButton = styled(ActionButton)`
  &:hover {
    color: ${props => props.theme.colors.success};
  }
`;

const SubtaskButton = styled(ActionButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 5px;
  
  svg {
    margin-right: ${props => props.showSubtasks ? '0' : '4px'};
  }
  
  span {
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  &:hover {
    opacity: 0.9;
    color: white;
  }
`;

const SubtaskCount = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.darkGray};
  margin-left: 10px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 3px;
  }
`;

const TaskItem = ({ 
  id,
  title, 
  category, 
  dueDate, 
  priority = 'medium', 
  completed = false,
  overdue = false,
  subtasks = [],
  onToggleComplete,
  onEdit,
  onDelete
}) => {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [showAddSubtaskForm, setShowAddSubtaskForm] = useState(false);
  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');
  const { addSubtask, deleteSubtask, toggleSubtaskCompletion, editSubtask } = useTask();
  
  const toggleSubtasks = () => {
    setShowSubtasks(!showSubtasks);
  };
  
  const handleAddSubtask = () => {
    setShowSubtasks(true);
    setShowAddSubtaskForm(true);
  };
  
  const handleAddSubtaskSubmit = (e) => {
    e.preventDefault();
    if (newSubtaskTitle.trim()) {
      addSubtask(id, { title: newSubtaskTitle.trim() });
      setNewSubtaskTitle('');
      setShowAddSubtaskForm(false);
    }
  };
  
  const completedSubtasks = subtasks.filter(subtask => subtask.completed).length;
  const hasSubtasks = subtasks.length > 0;
  
  return (
    <TaskItemContainer priority={priority}>
      <TaskMainContent>
        <TaskCheckbox completed={completed} onClick={onToggleComplete}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
          </svg>
        </TaskCheckbox>
        
        <TaskContent>
          <TaskTitle completed={completed}>{title}</TaskTitle>
          <TaskDetails>
            <TaskCategory>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" fill="currentColor"/>
              </svg>
              {category}
            </TaskCategory>
            
            <TaskDueDate overdue={overdue}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
              </svg>
              {dueDate}
            </TaskDueDate>
            
            {hasSubtasks && (
              <SubtaskCount>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/>
                  <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" fill="currentColor"/>
                </svg>
                {completedSubtasks}/{subtasks.length}
              </SubtaskCount>
            )}
          </TaskDetails>
        </TaskContent>
        
        <TaskActions>
          <SubtaskButton onClick={toggleSubtasks} title="View Subtasks" showSubtasks={showSubtasks}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={showSubtasks 
                ? "M19 13H5v-2h14v2z" 
                : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"} 
                fill="currentColor"/>
            </svg>
            {!showSubtasks && <span>Subtasks</span>}
          </SubtaskButton>
          
          <AddSubtaskButton onClick={handleAddSubtask} title="Add Subtask">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
            </svg>
          </AddSubtaskButton>
          
          <ActionButton onClick={onEdit} title="Edit Task">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
            </svg>
          </ActionButton>
          
          <ActionButton onClick={onDelete} title="Delete Task">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
            </svg>
          </ActionButton>
        </TaskActions>
      </TaskMainContent>
      
      {showSubtasks && (
        <Subtasks 
          taskId={id}
          subtasks={subtasks}
          onToggleSubtask={toggleSubtaskCompletion}
          onAddSubtask={addSubtask}
          onEditSubtask={editSubtask}
          onDeleteSubtask={deleteSubtask}
          showAddForm={showAddSubtaskForm}
          setShowAddForm={setShowAddSubtaskForm}
          newSubtaskTitle={newSubtaskTitle}
          setNewSubtaskTitle={setNewSubtaskTitle}
          onAddSubmit={handleAddSubtaskSubmit}
        />
      )}
    </TaskItemContainer>
  );
};
TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  priority: PropTypes.oneOf(['high', 'medium', 'low']),
  completed: PropTypes.bool,
  overdue: PropTypes.bool,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onToggleComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

TaskItem.defaultProps = {
  dueDate: null,
  priority: 'medium',
  completed: false,
  overdue: false,
  subtasks: [],
};
export default TaskItem;
