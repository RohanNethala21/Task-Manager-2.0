import React from 'react';
import styled from 'styled-components';

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
    background-color: #333;
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
  background-color: #ffffff;
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
    background-color: #333;
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
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
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

const LineChartPlaceholder = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, transparent 80%, rgba(33, 150, 243, 0.1) 80%, rgba(33, 150, 243, 0.1) 100%);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(33, 150, 243, 0.5);
    transform: translateY(-50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='none' stroke='%232196F3' stroke-width='5' d='M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,138.7C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96'%3E%3C/path%3E%3C/svg%3E") no-repeat;
    background-size: 100% 100%;
  }
`;

const PieChartPlaceholder = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    ${props => props.theme.colors.primary} 0% 30%,
    ${props => props.theme.colors.darkGray} 30% 55%,
    ${props => props.theme.colors.lightGray} 55% 100%
  );
  margin: 0 auto;
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.darkGray};
`;

const Productivity = () => {
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
            <CardTitle>Tasks Completed This Week</CardTitle>
            <CardValue>X%</CardValue>
          </SummaryCard>
          
          <SummaryCard>
            <CardTitle>Streak</CardTitle>
            <CardValue>[X] Days</CardValue>
          </SummaryCard>
          
          <SummaryCard>
            <CardTitle>Total Tasks</CardTitle>
            <CardValue>[Number]</CardValue>
          </SummaryCard>
        </SummaryCards>
      </SummarySection>
      
      <VisualDataSection>
        <VisualDataHeader>
          <SectionTitle>Visual Data</SectionTitle>
          <ExportButton>Export</ExportButton>
        </VisualDataHeader>
        
        <ChartsContainer>
          <ChartCard>
            <ChartTitle>Daily Completion Rate</ChartTitle>
            <ChartSubtitle>Last 7 days</ChartSubtitle>
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
            <ChartLegend>Days</ChartLegend>
          </ChartCard>
          
          <ChartCard>
            <ChartTitle>Points Earned Over Time</ChartTitle>
            <ChartSubtitle>Last 30 days</ChartSubtitle>
            <ChartContainer>
              <LineChartPlaceholder />
            </ChartContainer>
            <ChartLegend>Days</ChartLegend>
          </ChartCard>
        </ChartsContainer>
        
        <ChartCard>
          <ChartTitle>Tasks Breakdown</ChartTitle>
          <ChartSubtitle>By category</ChartSubtitle>
          <ChartContainer>
            <PieChartPlaceholder />
          </ChartContainer>
          <ChartLegend>Categories</ChartLegend>
        </ChartCard>
      </VisualDataSection>
    </ProductivityContainer>
  );
};

export default Productivity;
