import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTask } from '../../contexts/TaskContext';
import { useAuth } from '../../contexts/AuthContext';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const WelcomeSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const WelcomeSubtitle = styled.p`
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 20px;
`;

const TaskOverviewSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const StatCard = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: ${props => props.bgColor || '#e0e0e0'};
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatTitle = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 5px;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TasksSection = styled.div`
  margin-bottom: 40px;
`;

const TaskList = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`;

const TaskEmoji = styled.div`
  font-size: 1.5rem;
  margin-right: 15px;
`;

const TaskDetails = styled.div`
  flex: 1;
`;

const TaskName = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`;

const TaskDueDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
`;

const TaskPriority = styled.div`
  font-weight: 500;
  color: ${props => {
    switch (props.level) {
      case 'high':
        return props.theme.colors.warning;
      case 'medium':
        return props.theme.colors.highPriority;
      default:
        return props.theme.colors.darkGray;
    }
  }};
`;

const DeadlinesSection = styled.div`
  margin-bottom: 40px;
`;

const ProductivitySection = styled.div`
  margin-bottom: 40px;
`;

const ProductivityContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ProductivityCard = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductivityTitle = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
`;

const ProductivityValue = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductivitySubtitle = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
`;

const Dashboard = () => {
  const { tasks, getTotalTasksCount, getCompletionPercentage, getTotalPoints } = useTask();
  const { user } = useAuth();
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [overdueTasks, setOverdueTasks] = useState([]);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);

  useEffect(() => {
    // Here we calculate the number of completed tasks
    const completed = tasks.filter(task => task.completed);
    setCompletedTasks(completed.length);
    
    // Here we calculate the user's total # of points
    setTotalPoints(getTotalPoints());
    
    // Here we calculate the user's overdue tasks
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const overdue = tasks.filter(task => {
      if (task.completed) return false;
      if (!task.dueDate) return false;
      const dueDate = new Date(task.dueDate);
      return dueDate < today;
    });
    setOverdueTasks(overdue);
    
    // Here we get upcoming deadlines, within next 7 days
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    const upcoming = tasks.filter(task => {
      if (task.completed) return false;
      if (!task.dueDate) return false;
      const dueDate = new Date(task.dueDate);
      return dueDate >= today && dueDate <= nextWeek;
    }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    // Here we show top 3 upcoming deadlines
    setUpcomingDeadlines(upcoming.slice(0, 3)); 
    
    // Here we get all active tasks
    const active = tasks.filter(task => !task.completed)
      .sort((a, b) => {
        // Here we sort the tasks by priority first
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
        if (priorityDiff !== 0) return priorityDiff;
        
        // If there are ties in priorities, then sort by due date if available
        if (a.dueDate && b.dueDate) {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return 0;
      });
    // Now show top 3 active tasks
    setActiveTasks(active.slice(0, 3)); 
  }, [tasks, getTotalPoints]);

  // Helper function to get emoji based on task category
  const getTaskEmoji = (category) => {
    switch(category) {
      case 'Work': return '💼';
      case 'Personal': return '😊';
      case 'School': return '📚';
      default: return '📝';
    }
  };
  
  // Here we format the date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  // Here we check if a date is overdue
  const isOverdue = (dateString) => {
    if (!dateString) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(dateString);
    return dueDate < today;
  };

  return (
    <DashboardContainer>
      <WelcomeSection>
        <WelcomeTitle>Welcome back, {user?.name || 'User'}!</WelcomeTitle>
        <WelcomeSubtitle>Stay organized, prioritize effectively, and maintain momentum through Task Manager 2.0</WelcomeSubtitle>
      </WelcomeSection>
      
      <TaskOverviewSection>
        <SectionTitle>Task Overview</SectionTitle>
        <StatsContainer>
          <StatCard>
            <StatIcon bgColor="#e8f5e9">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#4CAF50"/>
              </svg>
            </StatIcon>
            <StatContent>
              <StatTitle>Tasks Completed</StatTitle>
              <StatValue>{completedTasks}</StatValue>
            </StatContent>
          </StatCard>
          
          <StatCard>
            <StatIcon bgColor="#e3f2fd">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="#2196F3"/>
              </svg>
            </StatIcon>
            <StatContent>
              <StatTitle>Points Earned</StatTitle>
              <StatValue>{totalPoints}</StatValue>
            </StatContent>
          </StatCard>
          
          <StatCard>
            <StatIcon bgColor="#ffebee">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#F44336"/>
              </svg>
            </StatIcon>
            <StatContent>
              <StatTitle>Overdue Tasks</StatTitle>
              <StatValue>{overdueTasks.length}</StatValue>
            </StatContent>
          </StatCard>
        </StatsContainer>
      </TaskOverviewSection>
      
      <TasksSection>
        <SectionTitle>Your Tasks</SectionTitle>
        <TaskList>
          {activeTasks.length > 0 ? (
            activeTasks.map(task => (
              <TaskItem key={task.id}>
                <TaskEmoji>{getTaskEmoji(task.category)}</TaskEmoji>
                <TaskDetails>
                  <TaskName>{task.title}</TaskName>
                  <TaskDueDate>{formatDate(task.dueDate)}</TaskDueDate>
                </TaskDetails>
                <TaskPriority level={task.priority}>{task.priority}</TaskPriority>
              </TaskItem>
            ))
          ) : (
            <TaskItem>
              <TaskEmoji><span role="img" aria-label=''>🎉</span></TaskEmoji>
              <TaskDetails>
                <TaskName>No active tasks</TaskName>
                <TaskDueDate>All caught up!</TaskDueDate>
              </TaskDetails>
              <TaskPriority>-</TaskPriority>
            </TaskItem>
          )}
        </TaskList>
      </TasksSection>
      
      <DeadlinesSection>
        <SectionTitle>Upcoming Deadlines</SectionTitle>
        <TaskList>
          {upcomingDeadlines.length > 0 ? (
            upcomingDeadlines.map(task => (
              <TaskItem key={task.id}>
                <TaskEmoji>{isOverdue(task.dueDate) ? '⏰' : '📅'}</TaskEmoji>
                <TaskDetails>
                  <TaskName>{task.title}</TaskName>
                  <TaskDueDate>{formatDate(task.dueDate)}</TaskDueDate>
                </TaskDetails>
                <TaskPriority level={task.priority}>{task.priority}</TaskPriority>
              </TaskItem>
            ))
          ) : (
            <TaskItem>
              <TaskEmoji><span role="img" aria-label=''>🎉</span></TaskEmoji>
              <TaskDetails>
                <TaskName>No upcoming deadlines</TaskName>
                <TaskDueDate>You&apos;re all set!</TaskDueDate>
              </TaskDetails>
              <TaskPriority>-</TaskPriority>
            </TaskItem>
          )}
        </TaskList>
      </DeadlinesSection>
      
      <ProductivitySection>
        <SectionTitle>Your Weekly Productivity</SectionTitle>
        <ProductivityContainer>
          <ProductivityCard>
            <ProductivityTitle>Completed Tasks</ProductivityTitle>
            <ProductivityValue>{completedTasks}</ProductivityValue>
            <ProductivitySubtitle>Out of {getTotalTasksCount()} total tasks</ProductivitySubtitle>
          </ProductivityCard>
          
          <ProductivityCard>
            <ProductivityTitle>Completion Rate</ProductivityTitle>
            <ProductivityValue>{getCompletionPercentage()}%</ProductivityValue>
            <ProductivitySubtitle>Keep up the good work!</ProductivitySubtitle>
          </ProductivityCard>
        </ProductivityContainer>
        

      </ProductivitySection>
    </DashboardContainer>
  );
};

export default Dashboard;
