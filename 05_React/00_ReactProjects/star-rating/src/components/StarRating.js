import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

 
  const emojis = ["😢", "😐", "🙂", "😄", "🤩"];
  const feedbackText = [
    "Oh no! We're sorry.",
    "Not too bad, but we can do better!",
    "Glad you liked it!",
    "Wow! Thank you so much!",
    "Amazing! You're the best!",
  ];

  return (
    <div className="container">
      <h1 className="title">Rate Us!</h1>
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;

          return (
            <FaStar
              key={index}
              size={50}
              className={`starIcon ${starValue <= rating ? "bounce" : ""}`}
              style={{
                color: starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>
      {rating ? (
        <div className="feedback-container">
          <p className="emoji">{emojis[rating - 1]}</p>
          <p className="feedback">{feedbackText[rating - 1]}</p>
        </div>
      ) : null}
    </div>
  );
};

export default StarRating;
