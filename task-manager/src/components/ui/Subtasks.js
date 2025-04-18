import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const SubtaskContainer = styled.div`
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubtaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.cardBackground};
  border-left: 3px solid ${props => props.theme.colors.lightGray};
  margin-bottom: 8px;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateX(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

const SubtaskCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${props => props.completed ? props.theme.colors.success : props.theme.colors.lightGray};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.completed ? props.theme.colors.success : 'transparent'};
  
  svg {
    display: ${props => props.completed ? 'block' : 'none'};
  }
`;

const SubtaskTitle = styled.p`
  flex: 1;
  font-size: 0.9rem;
  margin: 0;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? props.theme.colors.darkGray : props.theme.colors.text};
`;

const SubtaskActions = styled.div`
  display: flex;
  gap: 8px;
`;

const SubtaskActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.darkGray};
  padding: 2px;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const AddSubtaskForm = styled.form`
  display: flex;
  margin-bottom: 10px;
  gap: 8px;
`;

const SubtaskInput = styled.input`
  flex: 1;
  padding: 8px 10px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
`;

const SubtaskButton = styled.button`
  padding: 8px 12px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Subtasks = ({ 
  taskId, 
  subtasks, 
  onToggleSubtask, 
  onAddSubtask, 
  onEditSubtask, 
  onDeleteSubtask 
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');
  const [editingSubtaskId, setEditingSubtaskId] = useState(null);
  const [editingSubtaskTitle, setEditingSubtaskTitle] = useState('');
  
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (newSubtaskTitle.trim()) {
      onAddSubtask(taskId, { title: newSubtaskTitle.trim() });
      setNewSubtaskTitle('');
      setShowAddForm(false);
    }
  };
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingSubtaskTitle.trim()) {
      onEditSubtask(taskId, editingSubtaskId, { title: editingSubtaskTitle.trim() });
      setEditingSubtaskId(null);
      setEditingSubtaskTitle('');
    }
  };
  
  const startEditing = (subtask) => {
    setEditingSubtaskId(subtask.id);
    setEditingSubtaskTitle(subtask.title);
  };
  
  return (
    <SubtaskContainer>
      {subtasks.map(subtask => (
        <SubtaskItem key={subtask.id}>
          <SubtaskCheckbox 
            completed={subtask.completed}
            onClick={() => onToggleSubtask(taskId, subtask.id)}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
            </svg>
          </SubtaskCheckbox>
          
          {editingSubtaskId === subtask.id ? (
            <AddSubtaskForm onSubmit={handleEditSubmit}>
              <SubtaskInput 
                type="text" 
                value={editingSubtaskTitle}
                onChange={(e) => setEditingSubtaskTitle(e.target.value)}
                autoFocus
              />
              <SubtaskButton type="submit">Save</SubtaskButton>
            </AddSubtaskForm>
          ) : (
            <>
              <SubtaskTitle completed={subtask.completed}>
                {subtask.title}
              </SubtaskTitle>
              
              <SubtaskActions>
                <SubtaskActionButton onClick={() => startEditing(subtask)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
                  </svg>
                </SubtaskActionButton>
                
                <SubtaskActionButton onClick={() => onDeleteSubtask(taskId, subtask.id)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                  </svg>
                </SubtaskActionButton>
              </SubtaskActions>
            </>
          )}
        </SubtaskItem>
      ))}
      
      {showAddForm ? (
        <AddSubtaskForm onSubmit={handleAddSubmit}>
          <SubtaskInput 
            type="text" 
            placeholder="Enter subtask title" 
            value={newSubtaskTitle}
            onChange={(e) => setNewSubtaskTitle(e.target.value)}
            autoFocus
          />
          <SubtaskButton type="submit">Add</SubtaskButton>
        </AddSubtaskForm>
      ) : (
        <SubtaskButton onClick={() => setShowAddForm(true)}>
          Add Subtask
        </SubtaskButton>
      )}
    </SubtaskContainer>
  );
};
Subtasks.propTypes = {
  taskId: PropTypes.number.isRequired,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleSubtask: PropTypes.func.isRequired,
  onAddSubtask: PropTypes.func.isRequired,
  onEditSubtask: PropTypes.func.isRequired,
  onDeleteSubtask: PropTypes.func.isRequired,
};
export default Subtasks;
