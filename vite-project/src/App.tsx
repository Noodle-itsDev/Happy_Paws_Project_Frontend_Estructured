// src/App.tsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPrivate from "./private_views/calendarPrivate";
const RegisterLoginView = lazy(() => import("./public_views/registerAndLogin/registerLoginView"));
const ProtectoraHomeView = lazy(() => import("./private_views/protectora_profile/protectora_profile"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<RegisterLoginView />} />
        <Route path="/protectora/home" element={<ProtectoraHomeView />} />
        <Route path="/protectora/calendar" element={<CalendarPrivate />}/>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
