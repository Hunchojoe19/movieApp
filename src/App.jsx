import { useState } from "react";
import "./App.css";
import Navbar from "./components/reusables/navbar/Navbar";
import Hero from "./components/pages/Hero";
import Suggestion from "./components/pages/Suggestion";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./components/pages/SingleMovie";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/" element={<Hero />} />
      </Routes>
      <Suggestion />
    </>
  );
}

export default App;
