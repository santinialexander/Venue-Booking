import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/book/:hallName" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

