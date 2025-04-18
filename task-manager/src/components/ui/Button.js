import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonComponent = styled.button`
  padding: ${props => props.size === 'small' ? '8px 15px' : props.size === 'large' ? '14px 28px' : '12px 20px'};
  background-color: ${props => props.variant === 'outline' ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.variant === 'outline' ? props.theme.colors.primary : 'white'};
  border: ${props => props.variant === 'outline' ? `1px solid ${props.theme.colors.primary}` : 'none'};
  border-radius: 4px;
  font-size: ${props => props.size === 'small' ? '0.9rem' : props.size === 'large' ? '1.1rem' : '1rem'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: ${props => props.fullWidth ? 'block' : 'inline-block'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  text-align: center;
  
  &:hover {
    background-color: ${props => props.variant === 'outline' ? 'rgba(0, 0, 0, 0.05)' : '#333'};
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.darkGray};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Button = ({ children, variant, size, fullWidth, ...props }) => {
  return (
    <ButtonComponent 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth} 
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['outline', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
  fullWidth: false,
};

export default Button;