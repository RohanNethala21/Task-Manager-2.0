import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ThemeToggle from '../ui/ThemeToggle';

/* the stylistic of the change of dark and light mode 
within the navigation bar on our UI */

const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  
  svg {
    margin-right: 10px;
  }
`;

const NavLinks = styled.div`
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

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserName = styled.span`
  font-weight: 500;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 15px 20px;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  border-left: ${props => props.active ? `4px solid ${props.theme.colors.primary}` : 'none'};
  padding-left: ${props => props.active ? '16px' : '20px'};
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const MobileLogoutButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 15px 20px;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Navbar = () => {
  const location = window.location;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Only show navbar if not on login page and user is authenticated
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';
  if (isLoginPage || !isAuthenticated) return null;
  
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to="/dashboard">
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
        
        <UserSection>
          <ThemeToggle />
          <UserName>Hello, {user?.name || 'User'}</UserName>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </UserSection>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavbarContent>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileNavLink to="/dashboard" active={location.pathname === '/dashboard' ? 1 : 0}>Dashboard</MobileNavLink>
        <MobileNavLink to="/tasks" active={location.pathname === '/tasks' ? 1 : 0}>Tasks</MobileNavLink>
        <MobileNavLink to="/productivity" active={location.pathname === '/productivity' ? 1 : 0}>Productivity</MobileNavLink>
        <MobileNavLink to="/settings" active={location.pathname === '/settings' ? 1 : 0}>Settings</MobileNavLink>
        <MobileNavLink to="/account" active={location.pathname === '/account' ? 1 : 0}>Account</MobileNavLink>
        <MobileLogoutButton onClick={handleLogout}>Logout</MobileLogoutButton>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
