import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './context/AppContext';

// Pages
import LoginPage from './pages/Login';
import ClientDashboard from './pages/client/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  const { user } = useApp();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* Client Routes */}
      <Route 
        path="/client/*" 
        element={user?.role === 'client' ? (
          <Routes>
            <Route path="dashboard" element={<ClientDashboard />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        ) : <Navigate to="/login" />} 
      />

      {/* Admin Routes */}
      <Route 
        path="/admin/*" 
        element={user?.role === 'admin' ? (
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        ) : <Navigate to="/login" />} 
      />

      <Route path="/" element={<Navigate to={user ? `/${user.role}/dashboard` : "/login"} />} />
    </Routes>
  );
}

export default App;
