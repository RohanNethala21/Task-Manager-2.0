import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  
  svg {
    margin-right: 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: 5px 10px;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  border-bottom: ${props => props.active ? `2px solid ${props.theme.colors.primary}` : 'none'};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = () => {
  const location = useLocation();
  
  return (
    <HeaderContainer>
      <Logo>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" fill="black" />
          <rect x="3" y="14" width="7" height="7" fill="black" />
          <rect x="14" y="3" width="7" height="7" fill="black" />
          <rect x="14" y="14" width="7" height="7" fill="black" />
        </svg>
        Task Manager 2.0
      </Logo>
      
      <NavLinks>
        <NavLink to="/dashboard" active={location.pathname === '/dashboard' ? 1 : 0}>Dashboard</NavLink>
        <NavLink to="/tasks" active={location.pathname === '/tasks' ? 1 : 0}>Tasks</NavLink>
        <NavLink to="/productivity" active={location.pathname === '/productivity' ? 1 : 0}>Productivity</NavLink>
        <NavLink to="/settings" active={location.pathname === '/settings' ? 1 : 0}>Settings</NavLink>
        <NavLink to="/account" active={location.pathname === '/account' ? 1 : 0}>Account</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
