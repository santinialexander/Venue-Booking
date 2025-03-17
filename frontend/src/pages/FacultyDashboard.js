import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const navigate = useNavigate();

  const handleBookHall = (hallName) => {
    navigate(`/book/${hallName}`);
  };

  return (
    <div>
      <h2>Faculty Dashboard</h2>
      <button onClick={() => handleBookHall("Conference Hall")}>
        Book Conference Hall
      </button>
      <button onClick={() => handleBookHall("Seminar Hall")}>
        Book Seminar Hall
      </button>
    </div>
  );
};

export default FacultyDashboard;