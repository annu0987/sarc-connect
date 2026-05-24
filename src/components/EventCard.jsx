import "../styles/cards.css";

function EventCard({ title, desc }) {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default EventCard;