import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import BookingPage from "./pages/BookingPage";
import "./styles.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <h1>Venue Booking</h1>
          <div className="navbar-links">
            <Link to="/">Student Dashboard</Link>
            <Link to="/faculty">Faculty Dashboard</Link>
            <Link to="/booking">Book a Venue</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/faculty" element={<FacultyDashboard />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



