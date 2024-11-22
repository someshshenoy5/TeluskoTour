import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Sign Up function
  const signUp = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', {
        name,
        email,
        password,
      });
      alert('Sign up successful! Please log in.');
    } catch (error) {
      console.error('Sign up failed:', error);
      alert('Error during sign up.');
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password,
      });
      const userData = response.data;
      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Error during login.');
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await axios.post('http://localhost:8080/auth/logout');
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('user');
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Error during logout.');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
