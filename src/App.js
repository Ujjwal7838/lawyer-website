import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BookingPage from './pages/BookingPage';
import MyAppointmentsPage from './pages/MyAppointmentsPage';
import ChatScreen from './pages/ChatScreen';
import LawyerDetailsPage from './pages/LawyerDetailsPage';
import LawyerDashboard from './pages/LawyerDashboard';
import MyAccountPage from './pages/MyAccountPage';
import EditProfilePage from './pages/EditProfilePage';
import AppointmentHistoryPage from './pages/AppointmentHistoryPage';

 
import LawyerProtectedRoute from './components/LawyerProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* User Specific Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:lawyerId" element={<ProfilePage />} />
        <Route path="/booking/:lawyerId" element={<BookingPage />} />
        <Route path="/chat/:lawyerId" element={<ChatScreen />} />

        {/* Account Related Pages */}
        <Route path="/my-account" element={<MyAccountPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/appointments" element={<MyAppointmentsPage />} />
        <Route path="/appointment-history" element={<AppointmentHistoryPage />} />

        {/* Lawyer Specific Pages (Protected) */}
        { }
        <Route 
          path="/dashboard" 
          element={
            <LawyerProtectedRoute>
              <LawyerDashboard />
            </LawyerProtectedRoute>
          } 
        />
        { }
        <Route 
          path="/complete-profile" 
          element={
            <LawyerProtectedRoute>
              <LawyerDetailsPage />
            </LawyerProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;