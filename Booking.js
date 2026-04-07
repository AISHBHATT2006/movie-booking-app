import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

function Booking() {

  // React Router Hook (used for getting movie id from URL)
  const { id } = useParams();

  // React Hook for navigation (Go Back button)
  const navigate = useNavigate();

  // React State (Dataflow concept)
  const [seats, setSeats] = useState(Array(20).fill(false)); 
  const [selected, setSelected] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  // Function to select/deselect seats
  const toggleSeat = (index) => {
    if (seats[index]) return; // already booked

    if (selected.includes(index)) {
      setSelected(selected.filter(s => s !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  // Handle booking button click
  const handleBooking = () => {
    if (selected.length === 0) {
      alert("Please select at least one seat");
      return;
    }
    setShowPayment(true); // show payment UI (Conditional Rendering)
  };

  // Fake payment logic
  const handlePayment = () => {
    let updatedSeats = [...seats];

    selected.forEach(seat => {
      updatedSeats[seat] = true;
    });

    setSeats(updatedSeats);
    setSelected([]);
    setShowPayment(false);

    alert("Payment successful! Booking confirmed for movie ID: " + id);
  };

  return (
    <div className="container">

      {/* Go Back Button using React Router Hook */}
      <button onClick={() => navigate(-1)}>
        ⬅ Go Back
      </button>

      <h2>Select Seats</h2>

      {/* JSX + Dynamic Rendering */}
      <div className="grid">
        {seats.map((seat, index) => (
          <div
            key={index}
            onClick={() => toggleSeat(index)}
            className={`seat ${
              seat
                ? 'booked'
                : selected.includes(index)
                ? 'selected'
                : 'available'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Booking Button */}
      <button onClick={handleBooking}>
        Proceed to Payment
      </button>

      {/* Conditional Rendering (React Concept) */}
      {showPayment && (
        <div className="card">
          <h3>Payment</h3>

          {/* Dataflow using state */}
          <p>Seats Selected: {selected.join(', ')}</p>
          <p>Total Amount: ₹{selected.length * 150}</p>

          {/* Dummy Payment Inputs */}
          <input placeholder="Card Number" />
          <input placeholder="Expiry Date" />
          <input placeholder="CVV" />

          <button onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Booking;