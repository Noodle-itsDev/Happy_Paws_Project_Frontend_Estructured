import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./public_views/components/footer/footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes></Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
