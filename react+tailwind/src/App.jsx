import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import XM6 from "./pages/XM6";
import About from "./pages/About"
import UltTower from "./pages/UltTower";
import LinkBuds from "./pages/LinkBuds";
import LinkBudsOpen from "./pages/LinkBudsOpen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WH-1000XM6" element={<XM6 />} />
        <Route path="/ultTower" element={<UltTower />} />
        <Route path="/linkBuds" element={<LinkBuds />} />
        <Route path="/linkBuds-openEar" element={<LinkBudsOpen />} />
        <Route path="/About_Page" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
