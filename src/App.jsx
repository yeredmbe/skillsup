import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Settings } from './pages/Settings';
import { FindTeacher } from './pages/FindTeacher';
import { TeacherProfile } from './pages/TeacherProfile';
import Verification from './pages/Verification';
import { Payment } from './pages/Payment';
import { GlobalLoader } from './components/GlobalLoader';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <GlobalLoader />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/teachers" element={<FindTeacher />} />
          {/* <Route path="/messages" element={<Messages />} /> */}
          <Route path="/profile/:id" element={<TeacherProfile />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
