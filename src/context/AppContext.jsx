import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id, name, email, role: 'client' | 'admin' }
  const [tickets, setTickets] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [clients, setClients] = useState([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedTickets = localStorage.getItem('tickets');
    if (savedTickets) setTickets(JSON.parse(savedTickets));

    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));

    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedClients = localStorage.getItem('clients');
    if (savedClients) setClients(JSON.parse(savedClients));
    else {
      // Seed initial clients
      const initialClients = [
        { id: 'c1', name: 'John Doe', company: 'TechCorp', email: 'john@techcorp.com', ticketCount: 2 },
        { id: 'c2', name: 'Sarah Smith', company: 'DesignCo', email: 'sarah@designco.com', ticketCount: 1 }
      ];
      setClients(initialClients);
      localStorage.setItem('clients', JSON.stringify(initialClients));
    }
  }, []);

  // Save to local storage on changes
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (email, password, role = 'client') => {
    // Basic mock login
    const userData = { 
      id: role === 'admin' ? 'admin1' : 'user_' + Date.now(),
      name: role === 'admin' ? 'Agency Admin' : 'Client User',
      email,
      role
    };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addTicket = (ticketData) => {
    const newTicket = {
      id: 'T-' + Math.floor(1000 + Math.random() * 9000),
      ...ticketData,
      status: 'Waiting',
      createdAt: new Date().toISOString(),
      activityLog: [{ type: 'status', status: 'Waiting', timestamp: new Date().toISOString() }],
      messages: [],
      revisionsUsed: 0,
      totalRevisions: 3
    };
    setTickets([newTicket, ...tickets]);
    addNotification('New ticket created', 'Your project request has been submitted.', 'client');
    addNotification('New Ticket Received', `New project: ${ticketData.title}`, 'admin');
    return newTicket;
  };

  const updateTicketStatus = (ticketId, newStatus, reason = '') => {
    setTickets(tickets.map(t => {
      if (t.id === ticketId) {
        const updated = {
          ...t,
          status: newStatus,
          activityLog: [...t.activityLog, { type: 'status', status: newStatus, reason, timestamp: new Date().toISOString() }]
        };
        addNotification('Status Updated', `Ticket ${ticketId} is now ${newStatus}`, 'client');
        return updated;
      }
      return t;
    }));
  };

  const addMessage = (ticketId, message, senderRole) => {
    setTickets(tickets.map(t => {
      if (t.id === ticketId) {
        return {
          ...t,
          messages: [...t.messages, {
            id: Date.now(),
            text: message,
            sender: senderRole,
            timestamp: new Date().toISOString()
          }]
        };
      }
      return t;
    }));
  };

  const addNotification = (title, message, targetRole) => {
    const newNotif = {
      id: Date.now(),
      title,
      message,
      read: false,
      timestamp: new Date().toISOString(),
      targetRole
    };
    setNotifications([newNotif, ...notifications]);
  };

  const markAllNotificationsRead = (role) => {
    setNotifications(notifications.map(n => n.targetRole === role ? { ...n, read: true } : n));
  };

  return (
    <AppContext.Provider value={{
      user, login, logout,
      tickets, addTicket, updateTicketStatus, addMessage,
      notifications, markAllNotificationsRead,
      clients
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
