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
          videoUrl: "https://www.youtube.com/embed/e5YnQNjscFQ?si=I4hPgBYzz1s9wEvo"
        },
        {
          name: "Ardhapatakahastah",
          image: "/assets/images/One Hand Movements/Ardhapataka.png",
          meaning: "Half-Flag",
          videoUrl: "https://www.youtube.com/embed/YOUZZZkcpIU?si=60QHK_u2M2Ksr48D"
        },
        {
          name: "Kartarimukhahastah",
          image: "/assets/images/One Hand Movements/Kartarimukha.png",
          meaning: "The face of a scissor",
          videoUrl: "https://www.youtube.com/embed/JZlhgfcCf3M?si=wvDlsL9WjwDNg266"
        },
        {
          name: "Mayurahastah",
          image: "/assets/images/One Hand Movements/Mayura.png",
          meaning: "Peacock",
          videoUrl: "https://www.youtube.com/embed/nrRgeP4-Jjg?si=rnfwW54iFb7lZX5C"
        },
        {
          name: "Ardhacandrahastah",
          image: "/assets/images/One Hand Movements/Ardhacandra.png",
          meaning: "Half Moon",
          videoUrl: "https://www.youtube.com/embed/l0Of4lRX334?si=6hGHwAxJtkBGgIpf"
        },
        {
          name: "Aralahastah",
          image: "/assets/images/One Hand Movements/Arala.png",
          meaning: "Slightly bent or curved fingers",
          videoUrl: "https://www.youtube.com/embed/Ijblv-HLf_U?si=x19MrCPK7QCg-Lzn"
        },
        {
          name: "Sukatundahastah",
          image: "/assets/images/One Hand Movements/Sukatunda.png",
          meaning: "Parrot's beak",
          videoUrl: "https://www.youtube.com/embed/Ijblv-HLf_U?si=eOYzl01_e8jDMSBl&amp;start=24"
        },
        {
          name: "Mushtihastah",
          image: "/assets/images/One Hand Movements/Musti.png",
          meaning: "Fist",
          videoUrl: "https://www.youtube.com/embed/rrYZlwkZFwE?si=uaeDqKE-DKqKGSIL"
        },
        {
          name: "Sikharahastah",
          image: "/assets/images/One Hand Movements/Sikhara.png",
          meaning: "Peak",
          videoUrl: "https://www.youtube.com/embed/SRNzt3afnKE?si=989RnYJ_QFPuymjV"
        },
        {
          name: "Kapitthahastah",
          image: "/assets/images/One Hand Movements/Kapittaha.png",
          meaning: "Wood Apple",
          videoUrl: "https://www.youtube.com/embed/jv6MFqIYvBQ?si=1U_wTQEKT6gZk1IY"
        },
        {
          name: "katakaukhahastah",
          image: "/assets/images/One Hand Movements/Kapittaha.png",
          meaning: "Half-closed fist",
          videoUrl: "https://www.youtube.com/embed/tU4nk9eusWc?si=t3WnX6GWVTZeEXMy"
        },
        {
          name: "Sucihastah",
          image: "/assets/images/One Hand Movements/Suci.png",
          meaning: "Needle pointed",
          videoUrl: "https://www.youtube.com/embed/Gmm3zQQhzpc?si=D6RbIirnydTB1ksO"
        },
        {
          name: "Candrakalahastah",
          image: "/assets/images/One Hand Movements/Candrakala.png",
          meaning: "Cresent Moon",
          videoUrl: "https://www.youtube.com/embed/NeURbFUvh74?si=SZgO4fsgd_JYqHl7"
        },
        {
          name: "Padmakosahastah",
          image: "/assets/images/One Hand Movements/Padmakosa.png",
          meaning: "Lotus Bud",
          videoUrl: "https://www.youtube.com/embed/uKtL1d3BeGI?si=6yJ5UVBulkfJPD0a"
        },
        {
          name: "Sarpasirsahastah",
          image: "/assets/images/One Hand Movements/Sarpasirsaha.png",
          meaning: "Snake Head",
          videoUrl: "https://www.youtube.com/embed/i6zeVGfCUYk?si=0XNO1rZ7bhfZ_e3E"
        },
        {
          name: "Mrgasirsahastah",
          image: "/assets/images/One Hand Movements/Mrgasirsaha.png",
          meaning: "Deer Head",
          videoUrl: "https://www.youtube.com/embed/iHQuY5zMxLc?si=wApJHRPs3dlJdabh"
        },
        {
          name: "Simhamukhahastah",
          image: "/assets/images/One Hand Movements/Simhamukha.png",
          meaning: "Lion-face",
          videoUrl: "https://www.youtube.com/embed/eyxhKg8eqdw?si=svZ4QYImUnJ7fQXi"
        },
        {
          name: "Kangulahastah",
          image: "/assets/images/One Hand Movements/Kangula.png",
          meaning: "Little finger is curved or bent like a bud.",
          videoUrl: "https://www.youtube.com/embed/yjIqKiooANo?si=869VrCk2ZZywldOH"
        },
        {
          name: "Alapadmahastah",
          image: "/assets/images/One Hand Movements/Alapadma.png",
          meaning: "Moving Lotus",
          videoUrl: "https://www.youtube.com/embed/yjIqKiooANo?si=869VrCk2ZZywldOH"
        },
        {
          name: "Caturahastah",
          image: "/assets/images/One Hand Movements/Catura.png",
          meaning: "Dexterous",
          videoUrl: "https://www.youtube.com/embed/oguPzXFZDvE?si=ynaOp6B-8hKivy-j"
        },
        {
          name: "Bhramarahastah",
          image: "/assets/images/One Hand Movements/Bhramara.png",
          meaning: "Bee-shaped",
          videoUrl: "https://www.youtube.com/embed/oguPzXFZDvE?si=ynaOp6B-8hKivy-j"
        },
        {
          name: "Hamsasyahastah",
          image: "/assets/images/One Hand Movements/Hamasasya.png",
          meaning: "Swan face",
          videoUrl: "https://www.youtube.com/embed/yuCtpU-5sGk?si=u9iOaShzBLxCYTK0"
        },
        {
          name: "Hamsapakshahastah",
          image: "/assets/images/One Hand Movements/Hamsapaksha.png",
          meaning: "Swan - wing",
          videoUrl: "https://www.youtube.com/embed/DiyqNo2152Q?si=n54AJpwHLGTpHltf"
        },
        {
          name: "Sandamsahastah",
          image: "/assets/images/One Hand Movements/Sandamsa.png",
          meaning: "Pincers",
          videoUrl: "https://www.youtube.com/embed/3uOTC6tgYM4?si=UkbTk9-MPpwHgNKL"
        },
        {
          name: "Mukulashastah",
          image: "/assets/images/One Hand Movements/Mukula.png",
          meaning: "Pincers",
          videoUrl: "https://www.youtube.com/embed/jSU83TH3qsM?si=wWZphRykEQt2FPz4"
        },
        {
          name: "Tamracudahastah",
          image: "/assets/images/One Hand Movements/Tamracuda.png",
          meaning: "Cock",
          videoUrl: "https://www.youtube.com/embed/jSU83TH3qsM?si=Wp0_HbCMiiCfSu9w&amp;start=28"
        },
        {
          name: "Trisulahastah",
          image: "/assets/images/One Hand Movements/Trisula.png",
          meaning: "Trident",
          videoUrl: "https://www.youtube.com/embed/jSU83TH3qsM?si=om0mVnwwlFSp19le&amp;start=58"
        },
      ],
    },

    "2": {
      name: "Two Hand Movements",
      items: [
        {
          name: "Anjali",
          image: "/assets/images/Anjalihastah.png",
          meaning: "Folded Hands",
          videoUrl: "https://www.youtube.com/embed/Dn1HoQg2TFM?si=TfQ72I_CbdHEFQ60&amp;start=6"
        },
        {
          name: "Kapotahastah",
          image: "/assets/images/Two Hand Movements/Kapota.png",
          meaning: "Dove",
          videoUrl: "https://www.youtube.com/embed/Dn1HoQg2TFM?si=J4DVuRi2TDHKLRo6&amp;start=32"
        },
        {
          name: "Karkatahastah",
          image: "/assets/images/Two Hand Movements/Karkata.png",
          meaning: "Crab",
          videoUrl: "https://www.youtube.com/embed/Dn1HoQg2TFM?si=UHIdjeSMhbryyo5c&amp;start=53"
        },
        {
          name: "Svastikahastah",
          image: "/assets/images/Two Hand Movements/Svastika.png",
          meaning: "Svastika",
          videoUrl: "https://www.youtube.com/embed/niNeVLf0fKU?si=B3KwTYgZHMPWM-YD"
        },
        {
          name: "Dolahastah",
          image: "/assets/images/Two Hand Movements/Dola.png",
          meaning: "SWing",
          videoUrl: "https://www.youtube.com/embed/niNeVLf0fKU?si=bBHqe2Fn2Pt6liFn&amp;start=16"
        },
        {
          name: "Pushpaputahastah",
          image: "/assets/images/Two Hand Movements/Puspaputa.png",
          meaning: "Flower Basket",
          videoUrl: "https://www.youtube.com/embed/niNeVLf0fKU?si=EzbCWHVwUTD-qMBz&amp;start=32"
        },
        {
          name: "Utsangahastah",
          image: "/assets/images/Two Hand Movements/Utsanga.png",
          meaning: "The lap",
          videoUrl: "https://www.youtube.com/embed/dgs-88Trsbs?si=mReoV21VMQ41uLFh"
        },
        {
          name: "Sivalingahastah",
          image: "/assets/images/Two Hand Movements/Sivalinga.png",
          meaning: "Sivalinga",
          videoUrl: "https://www.youtube.com/embed/dgs-88Trsbs?si=sNXcP0fpju83Lij3&amp;start=32"
        },
        {
          name: "Katakavardhanahastah",
          image: "/assets/images/Two Hand Movements/Katakavardhana.png",
          meaning: "Link of increase",
          videoUrl: "https://www.youtube.com/embed/dgs-88Trsbs?si=eAnH3cM51317q743&amp;start=51"
        },
        {
          name: "Kartarisvastikahastah",
          image: "/assets/images/Two Hand Movements/Kartarisvastika.png",
          meaning: "Crossed arrows, branches, peaks, trees, etc",
          videoUrl: "https://www.youtube.com/embed/yrWPztdREco?si=kt03aIs759qBXp0D"
        },
        {
          name: "Sakatahastah",
          image: "/assets/images/Two Hand Movements/Sakata.png",
          meaning: "Cart",
          videoUrl: "https://www.youtube.com/embed/yrWPztdREco?si=2YnPjNpPX-EkXWUe&amp;start=40"
        },
        {
          name: "Sankhahastah",
          image: "/assets/images/Two Hand Movements/Sankha.png",
          meaning:"Conch",
          videoUrl: "https://www.youtube.com/embed/dgs-88Trsbs?si=eAnH3cM51317q743&amp;start=51"
        },
        {
          name: "Cakrahastah",
          image: "/assets/images/Two Hand Movements/Cakra.png",
          meaning:"Disc",
          videoUrl: "https://www.youtube.com/embed/2FB3X4FV5kc?si=YC8lLidi-aI7ISE5"
        },
        {
          name: "Samputahastah",
          image: "/assets/images/Two Hand Movements/Samputa.png",
          meaning:"Box",
          videoUrl: "https://www.youtube.com/embed/2FB3X4FV5kc?si=awj46SyYEH2BCnpB&amp;start=18"
        },
        {
          name: "Pasahastah",
          image: "/assets/images/Two Hand Movements/Pasa.png",
          meaning:"Noose",
          videoUrl: "https://www.youtube.com/embed/2FB3X4FV5kc?si=Q3fD6dRzSvrU01fi&amp;start=38"
        },
        {
          name: "Kilakahastah",
          image: "/assets/images/Two Hand Movements/Kilaka.png",
          meaning:"Key",
          videoUrl: "https://www.youtube.com/embed/0t7JPET3MdI?si=QFsnwS_zMMjSuxt2"
        },
        {
          name: "Matsyahastah",
          image: "/assets/images/Two Hand Movements/Matsya.png",
          meaning:"Fish",
          videoUrl: "https://www.youtube.com/embed/0t7JPET3MdI?si=k0tCdntKYk6eJOpd&amp;start=20"
        },
        {
          name: "Kurmahastah",
          image: "/assets/images/Two Hand Movements/Kurma.png",
          meaning:"Tortoise",
          videoUrl: "https://www.youtube.com/embed/0t7JPET3MdI?si=GKEjfWIpZIK47iXl&amp;start=39"
        },
        {
          name: "Varahahastah",
          image: "/assets/images/Two Hand Movements/Varaha.png",
          meaning:"Boar",
          videoUrl: "https://www.youtube.com/embed/oeU6gn-wfgE?si=npzMKcS1UT5itfzv"
        },
        {
          name: "Garudahastah",
          image: "/assets/images/Two Hand Movements/Garuda.png",
          meaning:"Hawk",
          videoUrl: "https://www.youtube.com/embed/oeU6gn-wfgE?si=kgoJu4aMuOdho8oT&amp;start=19"
        },
        {
          name: "Nagabandhahastah",
          image: "/assets/images/Two Hand Movements/Nagabandha.png",
          meaning:"Twining of snake",
          videoUrl: "https://www.youtube.com/embed/oeU6gn-wfgE?si=n4bVI8r6KjlrekrF&amp;start=37"
        },
        {
          name: "Khatvahastah",
          image: "/assets/images/Two Hand Movements/Khatva.png",
          meaning:"Cot",
          videoUrl: "https://www.youtube.com/embed/0cTGElMSFFY?si=Htty8UbccbFm6Fsl"
        },
        {
          name: "Bherundahastah",
          image: "/assets/images/Two Hand Movements/Bherunda.png",
          meaning:"Bird",
          videoUrl: "https://www.youtube.com/embed/0cTGElMSFFY?si=gPCpPtNbDKH64S0s&amp;start=201"
        },
      ],
    },

    "3": {
      name: "Leg Movements",
      items: [
        {
          name: "Udghattita",
          image: "/assets/images/Leg Movements/Udghattita.png",
          meaning: "The heel rises",
          videoUrl: "https://www.youtube.com/embed/FoltqOfRyVk?si=c5_S0EF3XaEVOhst&amp;start=26"
        },
        {
          name: "Sama",
          image: "/assets/images/Leg Movements/Sama.png",
          meaning: "Feet on the ground",
          videoUrl: "https://www.youtube.com/embed/FoltqOfRyVk?si=qT4koRn9FyWBALWa&amp;start=29"
        },
        {
          name: "Agratalasanchara",
          image: "/assets/images/Leg Movements/Agratalasanchara.png",
          meaning: "toe touches the ground",
          videoUrl: "https://www.youtube.com/embed/FoltqOfRyVk?si=s9FifZVo9IOOeXHw&amp;start=32"
        },
        {
          name: "Anchita",
          image: "/assets/images/Leg Movements/Anchita.png",
          meaning: "Legs on heel",
          videoUrl: "https://www.youtube.com/embed/FoltqOfRyVk?si=nr1Y_jOzLRwpAG0D&amp;start=35"
        },
        {
          name: "Kunchita",
          image: "/assets/images/Leg Movements/Kunchita.png",
          meaning: "Fingertips touch the ground",
          videoUrl: "https://www.youtube.com/embed/FoltqOfRyVk?si=yYkNvB4XsN41tD5p&amp;start=38"
        },
      ],
    },
    
    "4": {
      name: "Neck Movements",
      items: [
        {
          name: "Sundari Griva",
          image: "/assets/images/Neck Movements/Sundari.png",
          meaning: "Moves from side to side",
          videoUrl: "https://www.youtube.com/embed/KUPFrHs57Wo?si=GeS1bb34IAOzd-O0&amp;start=15"
        },
        {
          name: "Tirashcina Griva",
          image: "/assets/images/Neck Movements/Tirascina.png",
          meaning: "Moves in a V-shape",
          videoUrl: "https://www.youtube.com/embed/KUPFrHs57Wo?si=iUfj1C2p_OYq7-IL&amp;start=27"
        },
        {
          name: "Parivartita Griva",
          image: "/assets/images/Neck Movements/Parivartita.png",
          meaning: "Moves in a semicircle or moon-like shape",
          videoUrl: "https://www.youtube.com/embed/KUPFrHs57Wo?si=eN85XO-fx_Tm3Npr&amp;start=37"
        },
        {
          name: "Prakampita Griva",
          image: "/assets/images/Neck Movements/Prakampita.png",
          meaning: "Moves in forward and backward",
          videoUrl: "https://www.youtube.com/embed/KUPFrHs57Wo?si=DvVWqxo88PxXae2b&amp;start=48"
        },
      ],
    },

    "5": {
      name: "Head Movements",
      items: [
        {
          name: "Samasirah",
          image: "/assets/images/Sama.png",
          meaning: "Sama",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=go224llSmXi3uaF9&amp;start=65"
        },
        {
          name: "Udvahitam",
          image: "/assets/images/Head Movements/Udvahita.png",
          meaning: "Up Raised",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=E-Ixt25gAt69b4sp&amp;start=83"
        },
        {
          name: "Adhomukhasirah",
          image: "/assets/images/Head Movements/Adhomukha.png",
          meaning: "Bent",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=F1zvJ-TiE_8o6dFM&amp;start=99"
        },
        {
          name: "Alolitasirah",
          image: "/assets/images/Head Movements/Alolita.png",
          meaning: "Rolling",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=tJhNZCFSANDsv2GI&amp;start=118"
        },
        {
          name: "Dhutasirah",
          image: "/assets/images/Head Movements/Udvahita.png",
          meaning: "Side Movement",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=LaXX3sGwzHgTXQ0M&amp;start=137"
        },
        {
          name: "Kampitasirah",
          image: "/assets/images/Head Movements/Kampita.png",
          meaning: "Nodding",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=2CnqGgrPMllMaT89&amp;start=151"
        },
        {
          name: "Paravrittasirah",
          image: "/assets/images/Head Movements/Paravrtta.png",
          meaning: "Turned face",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=FyQvko-9Nu67-m35&amp;start=168"
        },
        {
          name: "Utkshiptasirah",
          image: "/assets/images/Head Movements/Utksipta.png",
          meaning: "Turned upwards",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=cpRD58Eo6BXBFMZq&amp;start=185"
        },
        {
          name: "Parivahittasirah",
          image: "/assets/images/Head Movements/Parivahita.png",
          meaning: "Extensivelt moved",
          videoUrl: "https://www.youtube.com/embed/MUyBQCeyi2k?si=pdP3CngMXl1cJ58p&amp;start=205"
        },
      ],
    },
    
    "6": {
      name: "Eyes Movements",
      items: [
        {
          name: "Samadrishti",
          image: "/assets/images/Samadrstih.png",
          meaning: "Static eye-lashes",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=LOC9T2hxd8ZTlK4c"
        },
        {
          name: "Alokitadrstih",
          image: "/assets/images/Eyes Movements/Alokita.png",
          meaning: "Roll the eyeballs in a circular pattern",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=EqVfgJzHPiX6_HCT&amp;start=55"
        },
        {
          name: "Sachi",
          image: "/assets/images/Eyes Movements/Saci.png",
          meaning: "Look through the corner of the eyes",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=2TwBKZfDZJLbdT3u&amp;start=58"
        },
        {
          name: "Pralokitadrstih",
          image: "/assets/images/Eyes Movements/Alokita.png",
          meaning: " Move the eyes side to side",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=lmD2zF4xvqtlo-RD&amp;start=61"
        },
        {
          name: "Nimilitadrstih",
          image: "/assets/images/Eyes Movements/Nimilita.png",
          meaning: "Keep the eyes half closed",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=X1APDlCbIEaN-vP2&amp;start=63"
        },
        {
          name: "Ullokitadrstih",
          image: "/assets/images/Eyes Movements/Ullokita.png",
          meaning: " Look upwards",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=Ja2tLssnTBg8rXb_&amp;start=67"
        },
        {
          name: "Anuvrittadrstih",
          image: "/assets/images/Eyes Movements/Anuvrtta.png",
          meaning: "Move the eyes up and down rapidly",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=H4BEu6SuNgU7MDR9&amp;start=69"
        },
        {
          name: "Avalokitadrstih",
          image: "/assets/images/Eyes Movements/Avalokita.png",
          meaning: "Look down",
          videoUrl: "https://www.youtube.com/embed/Qm_TrdMGbdk?si=BDGMccZ-fv8TPtIs&amp;start=73"
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