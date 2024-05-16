import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Documents from "./pages/Documents.jsx";
import Contact from "./pages/Contact.jsx";
import Report from "./pages/Report.jsx";
import Search from "./pages/Search.jsx";
import NoPage from "./pages/NoPage.jsx";
import Impressum from "./pages/Impressum.jsx";
import Version from "./pages/Version.jsx";
import SignIn from "./pages/SignIn.jsx";

export default function App() {
  const isAuthenticated = localStorage.getItem("token"); // Überprüfen, ob ein Token im lokalen Speicher vorhanden ist

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Geschützte Route für die Startseite */}
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/signIn" />}
          />
          {/* Geschützte Routen für andere Seiten */}
          <Route
            path="/documents"
            element={
              isAuthenticated ? <Documents /> : <Navigate to="/signIn" />
            }
          />
          <Route
            path="/contact"
            element={isAuthenticated ? <Contact /> : <Navigate to="/signIn" />}
          />
          <Route
            path="/report"
            element={isAuthenticated ? <Report /> : <Navigate to="/signIn" />}
          />
          <Route
            path="/search"
            element={isAuthenticated ? <Search /> : <Navigate to="/signIn" />}
          />
          <Route
            path="/impressum"
            element={
              isAuthenticated ? <Impressum /> : <Navigate to="/signIn" />
            }
          />
          <Route
            path="/version"
            element={isAuthenticated ? <Version /> : <Navigate to="/signIn" />}
          />
          {/* Anmeldeseite */}
          <Route path="/signIn" element={<SignIn />} />
          {/* Standardseite für 404 */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
