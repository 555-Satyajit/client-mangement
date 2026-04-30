import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [tickets, setTickets] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [clients, setClients] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const login = (email, password, role = 'client') => {
    const userData = { id: 'user_' + Date.now(), name: 'User', email, role };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AppContext.Provider value={{
      user, login, logout,
      tickets, notifications, clients,
      theme, toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
