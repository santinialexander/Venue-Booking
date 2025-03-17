import React from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { hallName } = useParams();

  return (
    <div>
      <h2>Booking Page</h2>
      <p>Booking for: {hallName}</p>
      <form>
        <label>Event Name:</label>
        <input type="text" name="eventName" required />

        <label>Time Slot:</label>
        <input type="time" name="timeSlot" required />

        <label>Additional Notes:</label>
        <textarea name="notes"></textarea>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;