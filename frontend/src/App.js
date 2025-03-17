import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
          <h1 className="text-2xl font-bold">Venue Booking</h1>
          <div>
            <Link to="/" className="mx-4 hover:underline">Student Dashboard</Link>
            <Link to="/faculty" className="mx-4 hover:underline">Faculty Dashboard</Link>
            <Link to="/booking" className="mx-4 hover:underline">Book a Venue</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="p-6">
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


