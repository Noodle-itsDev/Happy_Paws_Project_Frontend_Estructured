// src/App.tsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const RegisterLoginView = lazy(() => import("./public_views/registerAndLogin/registerLoginView"));
const ProtectoraHomeView = lazy(() => import("./private_views/protectora_profile/protectora_profile"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<RegisterLoginView />} />
        <Route path="/protectora/home" element={<ProtectoraHomeView />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
