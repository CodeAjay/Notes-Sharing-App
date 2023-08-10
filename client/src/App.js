import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navi from "./components/nav";
import Footer from "./components/footer";
import Notes from "./components/Notes";

const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
<>

    <Router>
      <Navi />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
    

    </>
  );
};

export default App;
