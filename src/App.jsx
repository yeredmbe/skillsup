import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { FindTeacher } from './pages/FindTeacher';
import { Messages } from './pages/Messages';
import { TeacherProfile } from './pages/TeacherProfile';
import { Verification } from './pages/Verification';
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
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teachers" element={<FindTeacher />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile/:id" element={<TeacherProfile />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/payment/:id" element={<Payment />} />
      </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
