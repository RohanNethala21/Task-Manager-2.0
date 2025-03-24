import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';

import Header from './components/layout/Header';
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

const theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    background: '#f5f5f5',
    success: '#4CAF50',
    warning: '#FF5252',
    highPriority: '#FFC107',
    text: '#333333',
    lightGray: '#e0e0e0',
    darkGray: '#757575'
  },
  fonts: {
    main: "'Roboto', sans-serif"
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
