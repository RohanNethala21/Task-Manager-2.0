import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  width: 100%;
  height: ${props => props.height || '300px'};
  position: relative;
`;

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const Chart = ({ 
  type = 'line', 
  data, 
  options = {}, 
  height,
  ...props 
}) => {
  const chartOptions = {
    ...defaultOptions,
    ...options,
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={chartOptions} {...props} />;
      case 'pie':
        return <Pie data={data} options={chartOptions} {...props} />;
      case 'line':
      default:
        return <Line data={data} options={chartOptions} {...props} />;
    }
  };

  return (
    <ChartContainer height={height}>
      {renderChart()}
    </ChartContainer>
  );
};

export default Chart;
