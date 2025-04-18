import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTask } from '../../contexts/TaskContext';

const ProductivityContainer = styled.div`
  padding: 20px;
`;

const ProductivityHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const ProductivityTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProductivitySubtitle = styled.p`
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const SummarySection = styled.div`
  margin-bottom: 40px;
`;

const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SummarySubtitle = styled.p`
  color: ${props => props.theme.colors.darkGray};
`;

const ViewDetailsButton = styled.button`
  padding: 8px 15px;
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

const SummaryCards = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const SummaryCard = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.p`
  font-weight: 500;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.darkGray};
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const VisualDataSection = styled.div`
  margin-bottom: 40px;
`;

const VisualDataHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ExportButton = styled.button`
  padding: 8px 15px;
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

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.text};
`;

const ChartSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 15px;
`;

const ChartContainer = styled.div`
  height: 200px;
  position: relative;
`;

const BarChartPlaceholder = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  padding-top: 20px;
`;

const BarItem = styled.div`
  width: 30px;
  height: ${props => props.height}%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px 4px 0 0;
`;

const PieChartPlaceholder = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    ${props => props.theme.colors.primary} 0% ${props => props.completionPercentage}%,
    ${props => props.theme.colors.darkGray} ${props => props.completionPercentage}% 100%
  );
  margin: 0 auto;
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.darkGray};
  margin-top: 15px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.color};
  margin-right: 5px;
`;

const PointsSection = styled.div`
  margin-bottom: 40px;
`;

const PointsCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PointsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PointsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0;
  color: ${props => props.theme.colors.text};
`;

const PointsValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const PointsTable = styled.div`
  width: 100%;
`;

const PointsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`;

const PointsLabel = styled.div`
  color: ${props => props.theme.colors.text};
`;

const PointsAmount = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Productivity = () => {
  const { 
    tasks, 
    getTotalTasksCount, 
    getCompletionPercentage, 
    getTotalPoints 
  } = useTask();
  
  const [totalTasks, setTotalTasks] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  
  // Here we calculate the total # of subtasks
  const getTotalSubtasksCount = () => {
    return tasks.reduce((total, task) => total + task.subtasks.length, 0);
  };
  
  // Here we calculate the user's streak 
  const calculateStreak = useCallback(() => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return Math.min(Math.floor(completedTasks / 2), 14); // Cap at 14 days for demo
  }, [tasks]);
  
  // Here we update stats whenever tasks change
  useEffect(() => {
    setTotalTasks(getTotalTasksCount());
    setCompletionPercentage(getCompletionPercentage());
    setTotalPoints(getTotalPoints());
    setStreak(calculateStreak());
  }, [tasks, getTotalTasksCount, getCompletionPercentage, getTotalPoints, calculateStreak]);
  
  // Here we get tasks by category for the pie chart
  const getTasksByCategory = () => {
    const categories = {};
    tasks.forEach(task => {
      if (!categories[task.category]) {
        categories[task.category] = 0;
      }
      categories[task.category]++;
    });
    return categories;
  };
  
  const tasksByCategory = getTasksByCategory();
  
  return (
    <ProductivityContainer>
      <ProductivityHeader>
        <ProductivityTitle>Productivity Tracking</ProductivityTitle>
        <ProductivitySubtitle>Check your progress and performance</ProductivitySubtitle>
      </ProductivityHeader>
      
      <SummarySection>
        <SectionTitle>Summary Cards</SectionTitle>
        <SummaryHeader>
          <SummarySubtitle>Get quick insights</SummarySubtitle>
          <ViewDetailsButton>View Details</ViewDetailsButton>
        </SummaryHeader>
        
        <SummaryCards>
          <SummaryCard>
            <CardTitle>Tasks Completed</CardTitle>
            <CardValue>{completionPercentage}%</CardValue>
          </SummaryCard>
          
          <SummaryCard>
            <CardTitle>Streak</CardTitle>
            <CardValue>{streak} Days</CardValue>
          </SummaryCard>
          
          <SummaryCard>
            <CardTitle>Total Tasks</CardTitle>
            <CardValue>{totalTasks}</CardValue>
          </SummaryCard>
        </SummaryCards>
      </SummarySection>
      
      <PointsSection>
        <SectionTitle>Points System</SectionTitle>
        <PointsCard>
          <PointsHeader>
            <PointsTitle>Total Points Earned</PointsTitle>
            <PointsValue>{totalPoints} pts</PointsValue>
          </PointsHeader>
          
          <PointsTable>
            <PointsRow>
              <PointsLabel>High Priority Tasks</PointsLabel>
              <PointsAmount>10 points each</PointsAmount>
            </PointsRow>
            <PointsRow>
              <PointsLabel>Medium Priority Tasks</PointsLabel>
              <PointsAmount>5 points each</PointsAmount>
            </PointsRow>
            <PointsRow>
              <PointsLabel>Low Priority Tasks</PointsLabel>
              <PointsAmount>3 points each</PointsAmount>
            </PointsRow>
            <PointsRow>
              <PointsLabel>Subtasks Completed</PointsLabel>
              <PointsAmount>{getTotalSubtasksCount()} subtasks</PointsAmount>
            </PointsRow>
          </PointsTable>
        </PointsCard>
      </PointsSection>
      
      <VisualDataSection>
        <VisualDataHeader>
          <SectionTitle>Visual Data</SectionTitle>
          <ExportButton>Export</ExportButton>
        </VisualDataHeader>
        
        <ChartsContainer>
          <ChartCard>
            <ChartTitle>Task Completion Rate</ChartTitle>
            <ChartSubtitle>Overall progress</ChartSubtitle>
            <ChartContainer>
              <PieChartPlaceholder completionPercentage={completionPercentage} />
            </ChartContainer>
            <ChartLegend>
              <LegendItem>
                <LegendColor color={props => props.theme.colors.primary} />
                <span>Completed ({completionPercentage}%)</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color={props => props.theme.colors.darkGray} />
                <span>Remaining ({100 - completionPercentage}%)</span>
              </LegendItem>
            </ChartLegend>
          </ChartCard>
          
          <ChartCard>
            <ChartTitle>Points Earned</ChartTitle>
            <ChartSubtitle>Total: {totalPoints} points</ChartSubtitle>
            <ChartContainer>
              <BarChartPlaceholder>
                <BarItem height={60} />
                <BarItem height={40} />
                <BarItem height={70} />
                <BarItem height={50} />
                <BarItem height={80} />
                <BarItem height={45} />
                <BarItem height={65} />
              </BarChartPlaceholder>
            </ChartContainer>
            <ChartLegend>Last 7 days</ChartLegend>
          </ChartCard>
        </ChartsContainer>
        
        <ChartCard>
          <ChartTitle>Tasks Breakdown</ChartTitle>
          <ChartSubtitle>By category</ChartSubtitle>
          <ChartContainer>
            <PieChartPlaceholder completionPercentage={70} />
          </ChartContainer>
          <ChartLegend>
            {Object.keys(tasksByCategory).map((category, index) => (
              <LegendItem key={index}>
                <LegendColor color={index === 0 ? props => props.theme.colors.primary : 
                              index === 1 ? props => props.theme.colors.warning : 
                              props => props.theme.colors.success} />
                <span>{category} ({tasksByCategory[category]})</span>
              </LegendItem>
            ))}
          </ChartLegend>
        </ChartCard>
      </VisualDataSection>
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
