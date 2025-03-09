import React, { useState } from "react";

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "1", name: "One Hand Movements", image: "/assets/images/Pataka.png" },
    { id: "2", name: "Two Hand Movements", image: "/assets/images/anjalihastah.png" },
    { id: "3", name: "Leg Movements", image: "/assets/images/Leg.png" },
    { id: "4", name: "Neck Movements", image: "/assets/images/Neck.png" },
    { id: "5", name: "Head Movements", image: "/assets/images/Sama.png" },
    { id: "6", name: "Eyes Movements", image: "/assets/images/Samadrstih.png" },
  ];

  const images = {
    "1": {
      name: "One Hand Movements",
      items: [
        {
          name: "PatakaHastah",
          image: "/assets/images/Pataka.png",
          meaning: "Flag"
        },
        {
          name: "Tripatakahastah",
          image: "/assets/images/One Hand Movements/Tripataka.png",
          meaning: "Three Parts of Flag"
        },
        {
          name: "Ardhapatakahastah", 
          image: "/assets/images/One Hand Movements/Ardhapataka.png",
          meaning: "Half-Flag"
        },
        {
          name: "Kartarimukhahastah", 
          image: "/assets/images/One Hand Movements/Kartarimukha.png",
          meaning: "The face of a scissor"
        },
        {
          name: "Mayurahastah", 
          image: "/assets/images/One Hand Movements/Mayura.png",
          meaning: "Peacock"
        },
        {
          name: "Ardhacandrahastah", 
          image: "/assets/images/One Hand Movements/Ardhacandra.png",
          meaning: "Half Moon"
        },
        {
          name: "Aralahastah", 
          image: "/assets/images/One Hand Movements/Arala.png",
          meaning: "Slightly bent or curved fingers"
        },
        {
          name: "Sukatundahastah", 
          image: "/assets/images/One Hand Movements/Sukatunda.png",
          meaning: "Parrot's beak"
        },
        {
          name: "Mushtihastah", 
          image: "/assets/images/One Hand Movements/Musti.png",
          meaning: "Fist"
        },
        {
          name: "Sikharahastah", 
          image: "/assets/images/One Hand Movements/Sikhara.png",
          meaning: "Peak"
        },
        {
          name: "Kapitthahastah", 
          image: "/assets/images/One Hand Movements/Kapittaha.png",
          meaning: "Wood Apple"
        },
        {
          name: "Sucihastah", 
          image: "/assets/images/One Hand Movements/Suci.png",
          meaning: "Needle pointed"
        },
        {
          name: "Candrakalahastah", 
          image: "/assets/images/One Hand Movements/Candrakala.png",
          meaning: "Cresent Moon"
        },
        {
          name: "Padmakosahastah", 
          image: "/assets/images/One Hand Movements/Padmakosa.png",
          meaning: "Lotus Bud"
        }, 
        {
          name: "Sarpasirsahastah", 
          image: "/assets/images/One Hand Movements/Sarpasirsaha.png",
          meaning: "Snake Head"
        }, 
        {
          name: "Mrgasirsahastah", 
          image: "/assets/images/One Hand Movements/Mrgasirsaha.png",
          meaning: "Deer Head"
        }, 
        {
          name: "Simhamukhahastah", 
          image: "/assets/images/One Hand Movements/Simhamukha.png",
          meaning: "Lion-face"
        }, 
        {
          name: "Kangulahastah", 
          image: "/assets/images/One Hand Movements/Kangula.png",
          meaning: "Little finger is curved or bent like a bud."
        }, 
        {
          name: "Alapadmahastah", 
          image: "/assets/images/One Hand Movements/Alapadma.png",
          meaning: "Moving Lotus"
        }, 
        {
          name: "Caturahastah", 
          image: "/assets/images/One Hand Movements/Catura.png",
          meaning: "Dexterous"
        }, 
        {
          name: "Bhramarahastah", 
          image: "/assets/images/One Hand Movements/Bhramara.png",
          meaning: "Bee-shaped"
        }, 
        {
          name: "Hamsasyahastah", 
          image: "/assets/images/One Hand Movements/Hamasasya.png",
          meaning: "Swan face"
        }, 
        {
          name: "Hamsapakshahastah", 
          image: "/assets/images/One Hand Movements/Hamsapaksha.png",
          meaning: "Swan - wing"
        }, 
        {
          name: "Sandamsahastah", 
          image: "/assets/images/One Hand Movements/Sandamsa.png",
          meaning: "Pincers"
        }, 
        {
          name: "Mukulashastah", 
          image: "/assets/images/One Hand Movements/Mukula.png",
          meaning: "Pincers"
        }, 
        {
          name: "Tamracudahastah", 
          image: "/assets/images/One Hand Movements/Tamracuda.png",
          meaning: "Cock"
        }, 
        {
          name: "Trisulahastah", 
          image: "/assets/images/One Hand Movements/Trisula.png",
          meaning: "Trident"
        }, 
        {
          name: "Vyaghrahastah", 
          image: "/assets/images/One Hand Movements/Vyagra.png",
          meaning: "Tige"
        }, 
        {
          name: "Ardhasucihastah", 
          image: "/assets/images/One Hand Movements/Ardhasuci.png",
          meaning: "Half Indicatory"
        }, 
        {
          name: "katakahastah", 
          image: "/assets/images/One Hand Movements/Kataka.png",
          meaning: "Bracelet"
        }, 
        {
          name: "Vallihastah", 
          image: "/assets/images/One Hand Movements/Sandamsa.png",
          meaning: "Creeper/Hut"
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
    <div className="flex flex-col items-center justify-center mt-24 w-full">
      {/* <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">
        Learn Bharatanatyam
      </h1> */}

      {/* Show Categories if no card is clicked */}
      {!selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="flex flex-col items-center justify-center border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-40 h-40 object-contain mb-4"
              />
              <span className="text-center text-lg font-semibold text-gray-800">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Show Images when a card is clicked */}
      {selectedCategory && (
        <div className="w-full max-w-4xl px-4">
          {/* <button
            onClick={() => setSelectedCategory(null)}
            className="mb-4 text-blue-600 underline"
          >
            ⬅ Back
          </button> */}
          <h2 className="text-xl font-bold text-red-600 mb-6 text-center">
            {images[selectedCategory]?.name}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images[selectedCategory]?.items.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center justify-center bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-contain mb-2"
                />
                <p className="text-lg font-semibold text-center">{item.name}</p>
                <p className="text-sm text-gray-500 text-center">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
