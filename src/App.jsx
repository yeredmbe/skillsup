import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { FindTeacher } from './pages/FindTeacher';
import { TeacherProfile } from './pages/TeacherProfile';
import Verification from './pages/Verification';
import { Payment } from './pages/Payment';
import { GlobalLoader } from './components/GlobalLoader';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { FeedbackForm } from './pages/Feedback';
import HowToUse from './pages/HowToUse';

function App() {
  return (
    <React.Fragment>
      <GlobalLoader />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/settings" element={<HowToUse />} />
          <Route path="/teachers" element={<FindTeacher />} />
          {/* <Route path="/messages" element={<Messages />} /> */}
          <Route path="/profile/:id" element={<TeacherProfile />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/profile/:id/review" element={<FeedbackForm />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
