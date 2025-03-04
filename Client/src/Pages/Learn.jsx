import React from "react";
import { Link } from "react-router-dom";

const Learn = () => {
  const categories = [
    { id: "1", name: "One Hand Movements", image: "/assets/images/One hand.png" },
    { id: "2", name: "Two Hand Movements", image: "/assets/images/Two hand.png" },
    { id: "3", name: "Leg Movements", image: "/assets/images/Pataka.png" },
    { id: "4", name: "Neck Movements", image: "/assets/images/Pataka.png" },
    { id: "5", name: "Head Movements", image: "/assets/images/Pataka.png" },
    { id: "6", name: "Eyes Movements", image: "/assets/images/Pataka.png" },
  ];

  return (
    <div className="flex flex-col items-center mt-24 w-full">
      <h1 className="text-2xl font-bold text-red-600 mb-8">Learn Bharatanatyam</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl px-4">
        {categories.map((category) => (
          <Link
            to={`/learn/${category.id}`}
            key={category.id}
            className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-48 h-48 object-contain mb-4"
            />
            <span className="text-center text-lg font-semibold text-gray-800">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Learn;
