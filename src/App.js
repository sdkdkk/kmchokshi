import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import History from "./Pages/History";
import Ourbrands from "./Pages/Ourbrands";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/ourbrands" element={<Ourbrands />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
