import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Settings } from './pages/Settings';
import { FindTeacher } from './pages/FindTeacher';
import { Messages } from './pages/Messages';
import { TeacherProfile } from './pages/TeacherProfile';
import Verification from './pages/Verification';
import { Payment } from './pages/Payment';
import { GlobalLoader } from './components/GlobalLoader';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <GlobalLoader />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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
      </Router>
    </React.Fragment>
  );
}

export default App;
