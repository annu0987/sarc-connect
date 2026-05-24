import "../styles/pages.css";

function Stories() {
  return (
    <div className="page-container">
      <h1>Alumni Stories</h1>

      <div className="event-box">
        <h2>Startup Journey</h2>
        <p>Insights from entrepreneurial alumni.</p>
      </div>

      <div className="event-box">
        <h2>Corporate Success</h2>
        <p>Stories from industry professionals.</p>
      </div>

      <div className="event-box">
        <h2>Research Path</h2>
        <p>Guidance for higher studies and innovation.</p>
      </div>
    </div>
  );
}

export default Stories;