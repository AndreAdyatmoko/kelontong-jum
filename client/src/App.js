import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
// import Navbar from "./pages/navbar/navbar";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>

    </div>
  )
}

export default App;
