import React, { useState } from "react";

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);
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
          meaning: "Flag",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Tripatakahastah",
          image: "/assets/images/One Hand Movements/Tripataka.png",
          meaning: "Three Parts of Flag",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Ardhapatakahastah",
          image: "/assets/images/One Hand Movements/Ardhapataka.png",
          meaning: "Half-Flag",
          videoUrl: "https://www.youtube.com/embed/c4nGxGoO8-I?si=1wM6crINoFyc2pRe"
        },
        {
          name: "Kartarimukhahastah",
          image: "/assets/images/One Hand Movements/Kartarimukha.png",
          meaning: "The face of a scissor",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Mayurahastah",
          image: "/assets/images/One Hand Movements/Mayura.png",
          meaning: "Peacock",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Ardhacandrahastah",
          image: "/assets/images/One Hand Movements/Ardhacandra.png",
          meaning: "Half Moon",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Aralahastah",
          image: "/assets/images/One Hand Movements/Arala.png",
          meaning: "Slightly bent or curved fingers",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Sukatundahastah",
          image: "/assets/images/One Hand Movements/Sukatunda.png",
          meaning: "Parrot's beak",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Mushtihastah",
          image: "/assets/images/One Hand Movements/Musti.png",
          meaning: "Fist",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Sikharahastah",
          image: "/assets/images/One Hand Movements/Sikhara.png",
          meaning: "Peak",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Kapitthahastah",
          image: "/assets/images/One Hand Movements/Kapittaha.png",
          meaning: "Wood Apple",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Sucihastah",
          image: "/assets/images/One Hand Movements/Suci.png",
          meaning: "Needle pointed",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Candrakalahastah",
          image: "/assets/images/One Hand Movements/Candrakala.png",
          meaning: "Cresent Moon",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Padmakosahastah",
          image: "/assets/images/One Hand Movements/Padmakosa.png",
          meaning: "Lotus Bud",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Sarpasirsahastah",
          image: "/assets/images/One Hand Movements/Sarpasirsaha.png",
          meaning: "Snake Head",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Mrgasirsahastah",
          image: "/assets/images/One Hand Movements/Mrgasirsaha.png",
          meaning: "Deer Head",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Simhamukhahastah",
          image: "/assets/images/One Hand Movements/Simhamukha.png",
          meaning: "Lion-face",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Kangulahastah",
          image: "/assets/images/One Hand Movements/Kangula.png",
          meaning: "Little finger is curved or bent like a bud.",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Alapadmahastah",
          image: "/assets/images/One Hand Movements/Alapadma.png",
          meaning: "Moving Lotus",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Caturahastah",
          image: "/assets/images/One Hand Movements/Catura.png",
          meaning: "Dexterous",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Bhramarahastah",
          image: "/assets/images/One Hand Movements/Bhramara.png",
          meaning: "Bee-shaped",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Hamsasyahastah",
          image: "/assets/images/One Hand Movements/Hamasasya.png",
          meaning: "Swan face",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Hamsapakshahastah",
          image: "/assets/images/One Hand Movements/Hamsapaksha.png",
          meaning: "Swan - wing",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Sandamsahastah",
          image: "/assets/images/One Hand Movements/Sandamsa.png",
          meaning: "Pincers",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Mukulashastah",
          image: "/assets/images/One Hand Movements/Mukula.png",
          meaning: "Pincers",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Tamracudahastah",
          image: "/assets/images/One Hand Movements/Tamracuda.png",
          meaning: "Cock",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Trisulahastah",
          image: "/assets/images/One Hand Movements/Trisula.png",
          meaning: "Trident",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Vyaghrahastah",
          image: "/assets/images/One Hand Movements/Vyagra.png",
          meaning: "Tige",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Ardhasucihastah",
          image: "/assets/images/One Hand Movements/Ardhasuci.png",
          meaning: "Half Indicatory",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "katakahastah",
          image: "/assets/images/One Hand Movements/Kataka.png",
          meaning: "Bracelet",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
        {
          name: "Vallihastah",
          image: "/assets/images/One Hand Movements/Sandamsa.png",
          meaning: "Creeper/Hut",
          videoUrl: "https://www.youtube.com/embed/74Xyqa4iwK0"
        },
      ],
    },

    "2": {
      name: "Two Hand Movements",
      items: [
        {
          name: "Anjali",
          image: "/assets/images/Anjalihastah.png",
          meaning: "Folded Hands"
        },
        {
          name: "Kapotahastah",
          image: "/assets/images/Two Hand Movements/Kapota.png",
          meaning: "Dove"
        },
        {
          name: "Karkatahastah",
          image: "/assets/images/Two Hand Movements/Karkata.png",
          meaning: "Crab"
        },
        {
          name: "Svastikahastah",
          image: "/assets/images/Two Hand Movements/Svastika.png",
          meaning: "Svastika"
        },
        {
          name: "Dolahastah",
          image: "/assets/images/Two Hand Movements/Dola.png",
          meaning: "SWing"
        },
        {
          name: "Pushpaputahastah",
          image: "/assets/images/Two Hand Movements/Puspaputa.png",
          meaning: "Flower Basket"
        },
        {
          name: "Utsangahastah",
          image: "/assets/images/Two Hand Movements/Utsanga.png",
          meaning: "The lap"
        },
        {
          name: "Sivalingahastah",
          image: "/assets/images/Two Hand Movements/Sivalinga.png",
          meaning: "Sivalinga"
        },
        {
          name: "Katakavardhanahastah",
          image: "/assets/images/Two Hand Movements/Katakavardhana.png",
          meaning: "Link of increase"
        },
        {
          name: "Kartarisvastikahastah",
          image: "/assets/images/Two Hand Movements/Kartarisvastika.png",
          meaning: "Crossed arrows, branches, peaks, trees, etc"
        },
        {
          name: "Sakatahastah",
          image: "/assets/images/Two Hand Movements/Sakata.png",
          meaning: "Cart"
        },
        {
          name: "Sankhahastah",
          image: "/assets/images/Two Hand Movements/Sankha.png",
          meaning:"Conch"
        },
        {
          name: "Cakrahastah",
          image: "/assets/images/Two Hand Movements/Cakra.png",
          meaning:"Disc"
        },
        {
          name: "Samputahastah",
          image: "/assets/images/Two Hand Movements/Samputa.png",
          meaning:"Box"
        },
        {
          name: "Pasahastah",
          image: "/assets/images/Two Hand Movements/Pasa.png",
          meaning:"Noose"
        },
        {
          name: "Kilakahastah",
          image: "/assets/images/Two Hand Movements/Kilaka.png",
          meaning:"Key"
        },
        {
          name: "Matsyahastah",
          image: "/assets/images/Two Hand Movements/Matsya.png",
          meaning:"Fish"
        },
        {
          name: "Kurmahastah",
          image: "/assets/images/Two Hand Movements/Kurma.png",
          meaning:"Tortoise"
        },
        {
          name: "Varahahastah",
          image: "/assets/images/Two Hand Movements/Varaha.png",
          meaning:"Boar"
        },
        {
          name: "Garudahastah",
          image: "/assets/images/Two Hand Movements/Garuda.png",
          meaning:"Hawk"
        },
        {
          name: "Nagabandhahastah",
          image: "/assets/images/Two Hand Movements/Nagabandha.png",
          meaning:"Twining of snake"
        },
        {
          name: "Khatvahastah",
          image: "/assets/images/Two Hand Movements/Khatva.png",
          meaning:"Cot"
        },
        {
          name: "Bherundahastah",
          image: "/assets/images/Two Hand Movements/Bherunda.png",
          meaning:"Bird"
        },
      ],
    },
    
    "4": {
      name: "Neck Movements",
      items: [
        {
          name: "Sundari Griva",
          image: "/assets/images/Neck Movements/Sundari.png",
          meaning: "Moves from side to side"
        },
        {
          name: "Tirashcina Griva",
          image: "/assets/images/Neck Movements/Tirascina.png",
          meaning: "Moves in a V-shape"
        },
        {
          name: "Parivartita Griva",
          image: "/assets/images/Neck Movements/Parivartita.png",
          meaning: "Moves in a semicircle or moon-like shape"
        },
        {
          name: "Prakampita Griva",
          image: "/assets/images/Neck Movements/Prakampita.png",
          meaning: "Moves in forward and backward"
        },
      ],
    },
    "5": {
      name: "Head Movements",
      items: [
        {
          name: "Samasirah",
          image: "/assets/images/Sama.png",
          meaning: "Sama"
        },
        {
          name: "Udvahitam",
          image: "/assets/images/Head Movements/Udvahita.png",
          meaning: "Up Raised"
        },
        {
          name: "Adhomukhasirah",
          image: "/assets/images/Head Movements/Adhomukha.png",
          meaning: "Bent"
        },
        {
          name: "Alolitasirah",
          image: "/assets/images/Head Movements/Alolita.png",
          meaning: "Rolling"
        },
        {
          name: "Dhutasirah",
          image: "/assets/images/Head Movements/Udvahita.png",
          meaning: "Side Movement"
        },
        {
          name: "Kampitasirah",
          image: "/assets/images/Head Movements/Kampita.png",
          meaning: "Nodding"
        },
        {
          name: "Paravrittasirah",
          image: "/assets/images/Head Movements/Paravrtta.png",
          meaning: "Turned face"
        },
        {
          name: "Utkshiptasirah",
          image: "/assets/images/Head Movements/Utksipta.png",
          meaning: "Turned upwards"
        },
        {
          name: "Parivahittasirah",
          image: "/assets/images/Head Movements/Parivahita.png",
          meaning: "Extensivelt moved"
        },
      ],
    },
    "6": {
      name: "Eyes Movements",
      items: [
        {
          name: "Samadrishti",
          image: "/assets/images/Samadrstih.png",
          meaning: "Static eye-lashes"
        },
        {
          name: "Alokitadrstih",
          image: "/assets/images/Eyes Movements/Alokita.png",
          meaning: "Roll the eyeballs in a circular pattern"
        },
        {
          name: "Sachi",
          image: "/assets/images/Eyes Movements/Saci.png",
          meaning: "Look through the corner of the eyes"
        },
        {
          name: "Pralokitadrstih",
          image: "/assets/images/Eyes Movements/Alokita.png",
          meaning: " Move the eyes side to side"
        },
        {
          name: "Nimilitadrstih",
          image: "/assets/images/Eyes Movements/Nimilita.png",
          meaning: "Keep the eyes half closed"
        },
        {
          name: "Ullokitadrstih",
          image: "/assets/images/Eyes Movements/Ullokita.png",
          meaning: " Look upwards"
        },
        {
          name: "Anuvrittadrstih",
          image: "/assets/images/Eyes Movements/Anuvrtta.png",
          meaning: "Move the eyes up and down rapidly"
        },
        {
          name: "Avalokitadrstih",
          image: "/assets/images/Eyes Movements/Avalokita.png",
          meaning: "Look down"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {images[selectedCategory]?.items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer"
          onClick={() => setOpenVideo(item.videoUrl)}
        >
          <div className="flex flex-col items-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain mb-3 rounded-full border border-gray-200"
            />
            <h3 className="text-lg font-semibold text-center mb-1 text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-3">
              {item.meaning}
            </p>
          </div>
        </div>
      ))}

      {/* Video Popup Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-2xl w-full shadow-2xl transform transition-all scale-100">
            <div className="flex justify-end">
              <button
                onClick={() => setOpenVideo(null)}
                className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
            <iframe
              className="w-full h-96 rounded-lg"
              src={openVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Mudra Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>

        </div>
      )}
    </div>
  );
};

export default Learn;