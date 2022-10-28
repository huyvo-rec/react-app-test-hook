import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "../pages/auth/auth";
// import WithLocationHook from "../hoc/withLocation";
import Information from "../pages/information/information";

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route>
            <Route index element={<Auth />} />

            <Route path={"information"} element={<Information />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
