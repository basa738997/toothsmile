import React, { useState } from "react";
import ReviewForm from "../ReviewForm";
import ReviewList from "../ReviewShow";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);

  // Function to handle adding a new review
  const handleReviewSubmitted = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="bg-[#F7EAD0] pt-24">
      <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewContainer;
