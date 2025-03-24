import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
`;

const NavItem = styled.li`
  padding: 10px 0;
`;

const NavLinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.darkGray};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  svg {
    margin-bottom: 5px;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navigation = () => {
  const location = useLocation();
  
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/dashboard" active={location.pathname === '/dashboard' ? 1 : 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
            </svg>
            Dashboard
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/tasks" active={location.pathname === '/tasks' ? 1 : 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
            Tasks
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/productivity" active={location.pathname === '/productivity' ? 1 : 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" fill="currentColor"/>
            </svg>
            Productivity
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/settings" active={location.pathname === '/settings' ? 1 : 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"/>
            </svg>
            Settings
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/account" active={location.pathname === '/account' ? 1 : 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
            Account
          </NavLinkStyled>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
