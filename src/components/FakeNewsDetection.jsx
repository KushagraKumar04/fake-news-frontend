import React, { useState } from "react";
import "./FakeNewsDetection.css";

const FakeNewsDetection = () => {
  const [headline, setHeadline] = useState("");
  const [result, setResult] = useState(null);
  const [authenticity, setAuthenticity] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!headline.trim()) {
      alert("Please enter a news headline!");
      return;
    }

    // Mock API response simulation
    const mockApiResponse = {
      isFake: Math.random() < 0.5,
      confidence: Math.floor(Math.random() * 51) + 50, // Random confidence between 50% and 100%
    };

    const { isFake, confidence } = mockApiResponse;

    setResult(isFake ? "Fake" : "Real");
    setAuthenticity(confidence);
  };

  return (
    <div className="news-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a news headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="news-input"
        />
        <button type="submit" className="check-btn">
          Check News
        </button>
      </form>

      {result && authenticity !== null && (
        <div className={`result-box ${result === "Fake" ? "fake" : "real"}`}>
          <p>
            News is {result} with {authenticity}% authenticity.
          </p>
        </div>
      )}
    </div>
  );
};

export default FakeNewsDetection;
