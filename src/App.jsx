import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Stories from "./pages/Stories";

function App() {

  const path = window.location.pathname;

  return (
    <>
      <Navbar />

      {path === "/" && <Home />}
      {path === "/events" && <Events />}
      {path === "/stories" && <Stories />}

      <Footer />
    </>
  );
}

export default App;