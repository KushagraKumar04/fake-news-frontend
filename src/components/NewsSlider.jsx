import React from "react";
import "./NewsSlider.css";

const NewsSlider = () => {
  return (
    <div className="news-slider">
      <div className="news-item">Breaking: New advancements in AI!</div>
      <div className="news-item">Tech Giants Release Latest Gadgets</div>
      <div className="news-item">Cryptocurrency Surge: What's Next?</div>
      {/* Add more items to the slider as needed */}
    </div>
  );
};

export default NewsSlider;
