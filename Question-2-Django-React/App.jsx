import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/events/")
      .then((response) => setEvents(response.data))
      .catch((error) => console.log("Error fetching events:", error));
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SARC Events Portal</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Student Alumni Relations Cell</h1>
        <p>Explore upcoming SARC events, alumni interactions, and student opportunities .</p>
        <a className="hero-btn" href="#events">Explore Events</a>
      </section>

      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>

        <div className="event-grid">
          {events.length === 0 ? (
            <p className="empty-text">No events added yet. Add events from Django Admin.</p>
          ) : (
            events.map((event) => (
             <div className="event-card" key={event.id}>
  
                <h3>{event.title}</h3>
                <p className="date">📅 {event.date}</p>
                <p className="venue">📍 {event.venue}</p>
                <p>{event.description}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <section id="about" className="about">
        <h2>About This Project</h2>
        <p>
          Admins can add events from Django backend and they automatically appear
          on React frontend.
        </p>
      </section>

      <footer>Made for SARC Web Assignment</footer>
    </div>
  );
}

export default App;