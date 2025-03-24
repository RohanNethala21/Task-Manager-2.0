import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: ${props => props.marginBottom || '15px'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${props => props.error ? props.theme.colors.warning : props.theme.colors.text};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${props => props.error ? props.theme.colors.warning : props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.colors.warning : props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(244, 67, 54, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.lightGray};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.darkGray};
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.warning};
  font-size: 0.85rem;
  margin-top: 5px;
  margin-bottom: 0;
`;

const HelperText = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: 0.85rem;
  margin-top: 5px;
  margin-bottom: 0;
`;

const Input = ({ 
  label, 
  error, 
  helperText, 
  fullWidth, 
  marginBottom,
  ...props 
}) => {
  return (
    <InputContainer fullWidth={fullWidth} marginBottom={marginBottom}>
      {label && <Label error={error}>{label}</Label>}
      <StyledInput error={error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {helperText && !error && <HelperText>{helperText}</HelperText>}
    </InputContainer>
  );
};

export default Input;
