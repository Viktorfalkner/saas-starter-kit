"use client";

import React, { useState } from "react";

interface Review {
  name: string;
  text: string;
  rating: number;
}

const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of reviews
  const reviews: Review[] = [
    {
      name: "Angelo Prince",
      text: "Best workout app! This app has everything you need in order to track your workouts! From every exercise, the sets, the weight (it even shows you the plate math for your barbell exercises) and will show you your total volume lifted after your workout. I highly recommend!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Absolutely love this app! It simplifies workout tracking like no other. Great for both beginners and advanced users. Highly customizable, and the plate math is a genius touch!",
      rating: 5,
    },
    {
      name: "Michael Lee",
      text: "It’s super easy to log and track my workouts with this app. The intuitive design and user-friendly interface make it fun to use, and I can focus on my training. Must-have for gym-goers.",
      rating: 4,
    },
  ];

  const totalReviews = reviews.length;

  // Infinite scrolling: Calculate next and previous index
  const nextReview = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  const prevReview = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews
    );

  return (
    <section id="review" className="py-16 bg-gray-900">
      <div className="container mx-auto text-center max-w-xl relative">
        {/* Review Stars */}
        <div className="flex justify-center mb-4">
          {Array(reviews[currentIndex].rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-500">
                ⭐️
              </span>
            ))}
        </div>

        {/* Review Text */}
        <p className="text-lg text-gray-50 italic mb-6">
          "{reviews[currentIndex].text}"
        </p>

        {/* Reviewer's Name */}
        <p className="font-bold text-gray-50">{reviews[currentIndex].name}</p>

        {/* Navigation Arrows */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={prevReview}
            className="text-blue-500 hover:text-blue-600 text-2xl"
          >
            ←
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={nextReview}
            className="text-blue-500 hover:text-blue-600 text-2xl"
          >
            →
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                currentIndex === i ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
