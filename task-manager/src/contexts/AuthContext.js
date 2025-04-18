import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Here we check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkLoggedIn = () => {
      const userData = localStorage.getItem('taskManagerUser');
      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
      
      // Here we load registered users
      const registeredUsers = localStorage.getItem('taskManagerUsers');
      if (registeredUsers) {
        setUsers(JSON.parse(registeredUsers));
      } else {
        
        localStorage.setItem('taskManagerUsers', JSON.stringify([]));
        setUsers([]);
      }
      
      setLoading(false);
    };
    
    checkLoggedIn();
  }, []);

  const register = (name, email, password) => {
    // Here we check if email already exists
    if (users.some(user => user.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    
    // Here this will make a new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, 
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    // Now we add the user to the users array
    const updatedUsers = [...users, newUser];
    localStorage.setItem('taskManagerUsers', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    
    // Here we allow for auto login after registration
    localStorage.setItem('taskManagerUser', JSON.stringify(newUser));
    setUser(newUser);
    setIsAuthenticated(true);
    
    return { success: true };
  };

  // This is our Login function
  const login = (email, password) => {
    
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

// Here is where we add proptypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// This is just a custom hook to use auth context
export const useAuth = () => useContext(AuthContext);