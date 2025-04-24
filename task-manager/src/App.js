import React from 'react';
import PropTypes from 'prop-types';

// React Router imports for routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Styled-components theme provider and global styles
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

// Context providers for global state management
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

// Layout components (shared UI components)
import Navbar from './components/layout/Navbar';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Page components (actual views)
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Tasks from './components/pages/Tasks';
import Productivity from './components/pages/Productivity';
import Settings from './components/pages/Settings';
import Account from './components/pages/Account';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated based on localStorage
  const isAuthenticated = localStorage.getItem('taskManagerUser') !== null;

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Render the protected component if authenticated
  return children;
};

// Validate prop type for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Main App component with ThemeContext
function App() {
  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
}

// Component that wraps the entire app in Theme, Auth, and Task context providers
function AppWithTheme() {
  const { theme } = useTheme(); // Access current theme from context

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles /> {/* Apply global styles */}
      <AuthProvider> {/* Provide authentication context */}
        <TaskProvider> {/* Provide task management context */}
          <Router>
            <div className="app">
              <Navbar /> {/* Top navigation bar */}
              <main className="main-content">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Protected Routes */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/tasks" element={
                    <ProtectedRoute>
                      <Tasks />
                    </ProtectedRoute>
                  } />
                  <Route path="/productivity" element={
                    <ProtectedRoute>
                      <Productivity />
                    </ProtectedRoute>
                  } />
                  <Route path="/settings" element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  } />
                  <Route path="/account" element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
              <Navigation /> {/* Bottom navigation menu */}
              <Footer /> {/* Footer component */}
            </div>
          </Router>
        </TaskProvider>
      </AuthProvider>
    </StyledThemeProvider>
  );
}

export default App;
