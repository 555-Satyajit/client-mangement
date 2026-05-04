import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './context/AppContext';

// Layouts
import DashboardLayout from './components/layouts/DashboardLayout';

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
          <DashboardLayout>
            <Routes>
              <Route path="dashboard" element={<ClientDashboard />} />
              <Route path="*" element={<Navigate to="dashboard" />} />
            </Routes>
          </DashboardLayout>
        ) : <Navigate to="/login" />} 
      />

      {/* Admin Routes */}
      <Route 
        path="/admin/*" 
        element={user?.role === 'admin' ? (
          <DashboardLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<Navigate to="dashboard" />} />
            </Routes>
          </DashboardLayout>
        ) : <Navigate to="/login" />} 
      />

      <Route path="/" element={<Navigate to={user ? `/${user.role}/dashboard` : "/login"} />} />
    </Routes>
  );
}

export default App;
