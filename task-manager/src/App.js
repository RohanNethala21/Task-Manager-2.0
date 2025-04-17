import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import Navbar from './components/layout/Navbar';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Tasks from './components/pages/Tasks';
import Productivity from './components/pages/Productivity';
import Settings from './components/pages/Settings';
import Account from './components/pages/Account';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('taskManagerUser') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
}

function AppWithTheme() {
  const { theme } = useTheme();
  
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <TaskProvider>
          <Router>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
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
              <Navigation />
              <Footer />
            </div>
          </Router>
        </TaskProvider>
      </AuthProvider>
    </StyledThemeProvider>
  );
}

export default App;
