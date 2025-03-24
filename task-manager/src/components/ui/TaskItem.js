import React from 'react';
import styled from 'styled-components';

const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #ffffff;
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

const TaskItem = ({ 
  title, 
  category, 
  dueDate, 
  priority = 'medium', 
  completed = false,
  overdue = false,
  onToggleComplete,
  onEdit,
  onDelete
}) => {
  return (
    <TaskItemContainer priority={priority}>
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
        </TaskDetails>
      </TaskContent>
      
      <TaskActions>
        <ActionButton onClick={onEdit}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
          </svg>
        </ActionButton>
        
        <ActionButton onClick={onDelete}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
          </svg>
        </ActionButton>
      </TaskActions>
    </TaskItemContainer>
  );
};

export default TaskItem;
