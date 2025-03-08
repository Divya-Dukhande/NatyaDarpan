import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const images = {
    "1": {
      name: "One Hand Movements",
      items: [
        {
          name: "Pataka",
          image: "/assets/images/Pataka.png",
          meaning: "Flag"
        },
        {
          name: "Tripataka",
          image: "/assets/images/OneHandMovements/Tripataka.png",
          meaning: "Three Parts of Flag"
        },
        {
          name: "Ardhapataka",
          image: "/assets/images/OneHandMovements/Ardhapataka.png",
          meaning: "Half-Flag"
        },
      ],
    },
    "2": {
      name: "Two Hand Movements",
      items: [
        {
          name: "Anjali",
          image: "/assets/images/TwoHandMovements/Anjalihastah.png",
          meaning: "Salutation"
        },
        {
          name: "Kapotha",
          image: "/assets/images/TwoHandMovements/Kapotahastah.png",
          meaning: "Pigeon"
        },
      ],
    },
    "3": {
      name: "Leg Movements",
      items: [
        {
          name: "Leg Movement 1",
          image: "/assets/images/LegMovements/Leg1.png",
          meaning: "Description 1"
        },
        {
          name: "Leg Movement 2",
          image: "/assets/images/LegMovements/Leg2.png",
          meaning: "Description 2"
        },
      ],
    },
    "4": {
      name: "Neck Movements",
      items: [
        {
          name: "Neck Movement 1",
          image: "/assets/images/NeckMovements/Neck1.png",
          meaning: "Description 1"
        },
        {
          name: "Neck Movement 2",
          image: "/assets/images/NeckMovements/Neck2.png",
          meaning: "Description 2"
        },
      ],
    },
    "5": {
      name: "Head Movements",
      items: [
        {
          name: "Sama",
          image: "/assets/images/HeadMovements/Sama.png",
          meaning: "Level head"
        },
        {
          name: "Udvahitam",
          image: "/assets/images/HeadMovements/Udvahitam.png",
          meaning: "Raised head"
        },
      ],
    },
    "6": {
      name: "Eyes Movements",
      items: [
        {
          name: "Samadrishti",
          image: "/assets/images/EyeMovements/Samadrstih.png",
          meaning: "Straight gaze"
        },
        {
          name: "Alokitam",
          image: "/assets/images/EyeMovements/Alokitam.png",
          meaning: "Circular gaze"
        },
      ],
    },
  };

  return (
    <div className="flex flex-col items-center mt-24 w-full">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 underline"
      >
        Back
      </button>

      {/* Category Name */}
      <h1 className="text-2xl font-bold text-red-600 mb-8">
        {images[id]?.name}
      </h1>

      {/* Images Grid */}
      <div>
        {images[id]?.items.map((item, index) => (
          <div key={index}>
            <img
              src={`/assets/images/${item.image}`}
              alt={item.name}
              className="w-40 h-40 object-contain mb-4 border rounded-lg shadow"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
