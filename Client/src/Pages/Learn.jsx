import React, { useState } from "react";

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "1", name: "One Hand Movements", image: "/assets/images/Pataka.png" },
    { id: "2", name: "Two Hand Movements", image: "/assets/images/Anjalihastah.png" },
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
          url:'https://youtu.be/bi5oVX0Sp9s'
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