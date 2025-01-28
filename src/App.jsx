import React from "react";
import Header from "./components/Header";
import NewsSlider from "./components/NewsSlider";
import FakeNewsDetection from "./components/FakeNewsDetection";
import "./App.css"; // Global styles

function App() {
  return (
    <div className="app">
      <Header />
      <NewsSlider />
      <FakeNewsDetection />
    </div>
  );
}

export default App;
