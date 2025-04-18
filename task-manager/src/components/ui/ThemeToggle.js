import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const ToggleLabel = styled.span`
  margin-right: 8px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${props => props.theme.colors.primary};
  }
  
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.lightGray};
  transition: 0.4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ThemeIcon = styled.span`
  margin-left: 8px;
  font-size: 1.2rem;
`;

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <ToggleContainer>
      <ToggleLabel>Theme</ToggleLabel>
      <ToggleSwitch>
        <ToggleInput 
          type="checkbox" 
          checked={themeMode === 'dark'}
          onChange={toggleTheme}
        />
        <ToggleSlider />
      </ToggleSwitch>
      <ThemeIcon>
        {themeMode === 'dark' ? '🌙' : '☀️'}
      </ThemeIcon>
    </ToggleContainer>
  );
};

export default ThemeToggle;
