// src/App.tsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const ProtectoraHomeView = lazy(() => import("./private_views/protectora_profile/protectora_profile"));
const HomeView = lazy(() => import("./public_views/homeView/homeView"));
const Signup = lazy(() => import("./registerAndLogin/registerLoginView"));
const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/protectora/home" element={<ProtectoraHomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/register/login" element={<Signup/>}/>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
