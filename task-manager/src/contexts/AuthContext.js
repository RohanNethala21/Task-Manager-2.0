import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Create context
const AuthContext = createContext();

// Create provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkLoggedIn = () => {
      const userData = localStorage.getItem('taskManagerUser');
      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
      
      // Load registered users
      const registeredUsers = localStorage.getItem('taskManagerUsers');
      if (registeredUsers) {
        setUsers(JSON.parse(registeredUsers));
      } else {
        // Initialize with empty array if no users exist
        localStorage.setItem('taskManagerUsers', JSON.stringify([]));
        setUsers([]);
      }
      
      setLoading(false);
    };
    
    checkLoggedIn();
  }, []);

  // Register function
  const register = (name, email, password) => {
    // Check if email already exists
    if (users.some(user => user.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // In a real app, this would be hashed
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    // Add to users array
    const updatedUsers = [...users, newUser];
    localStorage.setItem('taskManagerUsers', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    
    // Auto login after registration
    localStorage.setItem('taskManagerUser', JSON.stringify(newUser));
    setUser(newUser);
    setIsAuthenticated(true);
    
    return { success: true };
  };

  // Login function
  const login = (email, password) => {
    // Find user with matching email and password
    const foundUser = users.find(user => user.email === email && user.password === password);
    
    if (foundUser) {
      localStorage.setItem('taskManagerUser', JSON.stringify(foundUser));
      setUser(foundUser);
      setIsAuthenticated(true);
      return { success: true };
    }
    
    return { success: false, message: 'Invalid email or password' };
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('taskManagerUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      loading, 
      users,
      register,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);