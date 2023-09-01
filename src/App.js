import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import History from "./Pages/History";
import Ourbrands from "./Pages/Ourbrands";
import Ourproducts from "./Pages/Ourproducts";
import Diamond from "./Pages/Diamond";
import Storelocator from "./Pages/Storelocator";
import Bookappointment from "./Pages/Bookappointment";
import Productdetails from "./Pages/Productdetails";
import ScrollToTop from "./Components/Scroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/ourbrands" element={<Ourbrands />} />
          <Route exact path="/ourproducts" element={<Ourproducts />} />
          <Route exact path="/diamond" element={<Diamond />} />
          <Route exact path="/storelocator" element={<Storelocator />} />
          <Route exact path="/bookappointment" element={<Bookappointment />} />
          <Route exact path="/productdetails" element={<Productdetails />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
