import React, { useEffect, useCallback } from 'react'; // Removed useState
import { useTask } from '../../contexts/TaskContext';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // Ensure this is used for styled components

const ProductivityContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
`;

const Productivity = () => { // Removed theme from props
  const { 
    tasks, 
    getTotalTasksCount, 
    getCompletionPercentage, 
    getTotalPoints 
  } = useTask();
  
  const calculateStreak = useCallback(() => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return Math.min(Math.floor(completedTasks / 2), 14); // Cap at 14 days for demo
  }, [tasks]);
  
  useEffect(() => {
    // Perform any necessary side effects here
    const totalTasks = getTotalTasksCount();
    const completionPercentage = getCompletionPercentage();
    const totalPoints = getTotalPoints();
    const streak = calculateStreak();

    console.log({ totalTasks, completionPercentage, totalPoints, streak });
  }, [tasks, getTotalTasksCount, getCompletionPercentage, getTotalPoints, calculateStreak]);
  
  return (
    <ProductivityContainer>
      <h1>Productivity Dashboard</h1>
      {/* Add meaningful JSX here */}
    </ProductivityContainer>
  );
};

Productivity.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      subtasks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired,
        })
      ),
    })
  ).isRequired,
  getTotalTasksCount: PropTypes.func.isRequired,
  getCompletionPercentage: PropTypes.func.isRequired,
  getTotalPoints: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      darkGray: PropTypes.string.isRequired,
      lightGray: PropTypes.string.isRequired,
      cardBackground: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      warning: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
    }).isRequired,
    breakpoints: PropTypes.shape({
      tablet: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Productivity;