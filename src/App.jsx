import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/report" element={<Report />} />
          <Route path="/search" element={<Search />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/version" element={<Version />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
