import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";
import Principal from "./components/Principal";
import Video from "./components/Video";
import React, { useState } from "react";

function App() {
  const [componenteAtivo, setComponenteAtivo] = useState(1);

  const handleTimeout = () => {
    setComponenteAtivo((prevComponenteAtivo) => prevComponenteAtivo + 1);
  };

  return (
    <Router>
      <main>
        <div>
          <AnimatePresence>
            <Routes>
              <Route path="/studio-sant" element={<Card />} />
              <Route
                path="/studio-sant/video"
                element={
                  <Video onTimeout={handleTimeout} showSkipButton={true} />
                }
              />
              <Route path="/studio-sant/principal" element={<Principal />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </Router>
  );
}

export default App;
