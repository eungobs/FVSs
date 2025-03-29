import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import HairCare from "./components/HairCare";
import "./App.css";

// Import page components
import Collections from "./pages/Collections";
import Shop from "./pages/Shop";
import HairColor from "./pages/HairColor";
import Wigs from "./pages/Wigs";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";

// Home page component
const Home = () => (
  <>
    <Hero />
    <FeaturedCollections />
    <HairCare />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/hair-color" element={<HairColor />} />
          <Route path="/hair-color/:type" element={<HairColor />} />
          <Route path="/wigs" element={<Wigs />} />
          <Route path="/wigs/:type" element={<Wigs />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/pages/:page" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;