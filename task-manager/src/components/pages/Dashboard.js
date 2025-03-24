import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background-color: #ffffff;
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
  background-color: #ffffff;
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
  background-color: #ffffff;
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

const ChartContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;
  margin-top: 20px;
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e0f7fa, #80deea, #4dd0e1, #26c6da);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2300acc1' fill-opacity='0.5' d='M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,186.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") no-repeat bottom;
    background-size: 100% 100px;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <WelcomeSection>
        <WelcomeTitle>Welcome back, [User]!</WelcomeTitle>
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
              <StatValue>8</StatValue>
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
              <StatValue>6</StatValue>
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
              <StatValue>5</StatValue>
            </StatContent>
          </StatCard>
        </StatsContainer>
      </TaskOverviewSection>
      
      <TasksSection>
        <SectionTitle>Your Tasks</SectionTitle>
        <TaskList>
          <TaskItem>
            <TaskEmoji>😊</TaskEmoji>
            <TaskDetails>
              <TaskName>Task Name</TaskName>
              <TaskDueDate>Due Date</TaskDueDate>
            </TaskDetails>
            <TaskPriority level="high">Priority Level</TaskPriority>
          </TaskItem>
          
          <TaskItem>
            <TaskEmoji>😊</TaskEmoji>
            <TaskDetails>
              <TaskName>Task Name</TaskName>
              <TaskDueDate>Due Date</TaskDueDate>
            </TaskDetails>
            <TaskPriority level="medium">Priority Level</TaskPriority>
          </TaskItem>
          
          <TaskItem>
            <TaskEmoji>😊</TaskEmoji>
            <TaskDetails>
              <TaskName>Task Name</TaskName>
              <TaskDueDate>Due Date</TaskDueDate>
            </TaskDetails>
            <TaskPriority>Priority Level</TaskPriority>
          </TaskItem>
        </TaskList>
      </TasksSection>
      
      <DeadlinesSection>
        <SectionTitle>Upcoming Deadlines</SectionTitle>
        <TaskList>
          <TaskItem>
            <TaskEmoji>⏰</TaskEmoji>
            <TaskDetails>
              <TaskName>Task Name</TaskName>
              <TaskDueDate>Due Date</TaskDueDate>
            </TaskDetails>
            <TaskPriority level="high">Urgency Level</TaskPriority>
          </TaskItem>
          
          <TaskItem>
            <TaskEmoji>⌛</TaskEmoji>
            <TaskDetails>
              <TaskName>Task Name</TaskName>
              <TaskDueDate>Due Date</TaskDueDate>
            </TaskDetails>
            <TaskPriority level="high">Urgency Level</TaskPriority>
          </TaskItem>
          
          <TaskItem>
            <TaskEmoji>🔔</TaskEmoji>
            <TaskDetails>
              <TaskName>Task Name</TaskName>
              <TaskDueDate>Due Date</TaskDueDate>
            </TaskDetails>
            <TaskPriority level="high">Urgency Level</TaskPriority>
          </TaskItem>
        </TaskList>
      </DeadlinesSection>
      
      <ProductivitySection>
        <SectionTitle>Your Weekly Productivity</SectionTitle>
        <ProductivityContainer>
          <ProductivityCard>
            <ProductivityTitle>Completed Tasks</ProductivityTitle>
            <ProductivityValue>8</ProductivityValue>
            <ProductivitySubtitle>+2 from last week</ProductivitySubtitle>
          </ProductivityCard>
          
          <ProductivityCard>
            <ProductivityTitle>Time Saved</ProductivityTitle>
            <ProductivityValue>4</ProductivityValue>
            <ProductivitySubtitle>+1 from last week</ProductivitySubtitle>
          </ProductivityCard>
        </ProductivityContainer>
        
        <ChartContainer>
          <SectionTitle>Weekly Progress</SectionTitle>
          <ChartPlaceholder />
        </ChartContainer>
      </ProductivitySection>
    </DashboardContainer>
  );
};

export default Dashboard;
