import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar"; // default import

// Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Resources from "./pages/Resources";
import Setup from "./pages/Setup";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
