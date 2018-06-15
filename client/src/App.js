import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Saved />
  </div>
);

export default App;
