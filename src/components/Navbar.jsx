import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SARC Connect</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/stories">Stories</a>
      </div>
    </nav>
  );
}

export default Navbar;