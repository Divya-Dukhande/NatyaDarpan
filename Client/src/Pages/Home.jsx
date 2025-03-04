import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Animation variants for each line
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full flex flex-col items-center justify-center p-8 mb-20 mt-24">
      {/* Top section (with fade-in animation) */}
      <section className="w-10/12 max-w-6xl py-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
          {/* Left Side: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/assets/images/Natraj.png"
              alt="Dance Pose"
              className="h-56 w-58 object-contain"
            />
          </div>

          {/* Right Side: Text */}
          <div className="flex-1 text-center p-12">
            <motion.p
              className="text-lg text-2xl font-semibold text-red-700"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              Angikam bhuvanam yasya vacikam sarvavanmayam।
            </motion.p>
            <motion.p
              className="text-lg text-2xl font-semibold mt-2 text-red-700"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Aharyam chandrataradi tam numah sattvikam sivam।।
            </motion.p>
          </div>
        </div>
      </section>

      {/* Downside */}
      <section className="w-10/12 max-w-6xl py-8  bg-black p-6 rounded-lg shadow-lg mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
          {/* Left Side: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/assets/images/Homescreen.png"
              alt="Dance Pose"
              className="h-56 w-58 object-contain"
            />
          </div>

          {/* Right Side: Text */}
          <div className="flex-1 text-center p-12">
            <motion.p
              className="text-lg text-3xl font-bold text-red-600"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
            >
              NatyaDarpan,
            </motion.p>
            <motion.p
              className="text-lg text-3xl font-bold text-white"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
            >
              Reflecting the Grace of Bharatnatym
            </motion.p>
            <motion.p
              className="text-lg text-2xl font-semibold mt-2 text-white"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1.5 }}
            >
              Where Tradition meets Expression
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;



// import React from "react";

// const Home = () => {
//   return (
//     <main className="w-full flex flex-col items-center justify-center p-8 mb-20 mt-24 bg-black">
//       {/* Top Section */}
//       <section className="w-10/12 max-w-6xl py-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 p-6 rounded-lg shadow-lg">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
//           {/* Left Side: Image */}
//           <div className="flex-1 flex justify-center items-center">
//             <img
//               src="/assets/images/Natraj.png"
//               alt="Dance Pose"
//               className="h-56 w-58 object-contain"
//             />
//           </div>

//           {/* Right Side: Text */}
//           <div className="flex-1 text-center p-12">
//             <p className="text-lg text-2xl font-semibold text-red-700">
//               Angikam bhuvanam yasya vacikam sarvavanmayam।
//             </p>
//             <p className="text-lg text-2xl font-semibold mt-2 text-red-700">
//               Aharyam chandrataradi tam numah sattvikam sivam।।
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Downside Image Section */}
//       <section className="w-10/12 max-w-6xl py-8 bg-black p-6 rounded-lg shadow-lg mt-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
//           {/* Left Side: Image */}
//           <div className="flex-1 flex justify-center items-center">
//             <img
//               src="/assets/images/Homescreen1.png"
//               alt="Dance Pose"
//               className="h-56 w-58 object-contain"
//             />
//           </div>

//           {/* Right Side: Text */}
//           <div className="flex-1 text-center p-12">
//             <p className="text-lg text-3xl font-bold text-red-600">
//               NatyaDarpan,
//             </p>
//             <p className="text-lg text-3xl font-bold text-white">
//               Reflecting the Grace of Bharatnatym
//             </p>
//             <p className="text-lg text-2xl font-semibold mt-2 text-white">
//               Where Tradition meets Expression
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       {/* <section className="text-center mt-10">
//         <h1 className="text-2xl font-bold">Welcome to NatyaDarpan</h1>
//         <p className="mt-2 text-lg">
//           Explore the beauty and traditions of Bharatanatyam.
//         </p>
//       </section> */}
//     </main>
//   );
// };

// export default Home;
