import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Ceramicworkshop from "./pages/Ceramicworkshop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ceramicworkshop" element={<Ceramicworkshop/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;