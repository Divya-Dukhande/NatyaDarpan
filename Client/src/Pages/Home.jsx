


import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full flex flex-col items-center justify-center p-8 mb-20 mt-24 relative overflow-hidden bg-white">
      {/* Top section */}
      <section className="w-10/12 max-w-6xl py-8 bg-yellow-100 p-6 rounded-lg shadow-lg relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src="/assets/images/Natraj.png" alt="Dance Pose" className="h-56 w-58 object-contain" />
          </div>

          {/* Right Side: Text */}
          <div className="flex-1 text-center p-12">
            <motion.p
              className="text-2xl font-semibold text-red-800"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              आङ्गिकं भुवनं यस्य वाचिकं सर्ववाङ्मयम् ।
            </motion.p>
            <motion.p
              className="text-2xl font-semibold mt-2 text-red-800"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              आहार्यं चन्द्रतारादि तं नुमः सात्त्विकं शिवम् ।
            </motion.p>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="w-10/12 max-w-6xl py-8 p-6  mt-10 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Explore Bharatanatyam</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} >
          <div>
            <img src="/assets/images/nataraja3.jpg" alt="Traditional Dance" className="rounded-lg w-full h-[700px] object-cover" />
          </div>
          <div>
            <img src="/assets/images/Cultural_Bharatanatym.jpg" alt="Cultural Festival" className="rounded-lg w-full h-[700px] object-cover" />
          </div>
          <div>
            <img src="/assets/images/bharatnatyam_stage.png" alt="Stage Performance" className="rounded-lg w-full h-[700px] object-cover" />
          </div>
        </Carousel>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-10/12 max-w-6xl py-8 bg-yellow-100 p-6 rounded-lg shadow-lg mt-10 text-red-900 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">Why Choose NatyaDarpan?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Comprehensive Learning",
              text: "Get everything about Bharatanatyam in one place—history, significance, movements, and more.",
              link: "/about",
            },
            {
              title: "Step-by-Step Movements",
              text: "Learn hand, head, neck, eyes, and leg movements with detailed explanations and videos.",
              link: "/learn",
            },
            {
              title: "One-Stop Platform",
              text: "Instead of searching multiple websites, find all the Bharatanatyam essentials here.",
              link: "/",
            },
            {
              title: "Shop Bharatanatyam Essentials",
              text: "Explore and purchase Bharatanatyam accessories, costumes, jewelry, and dance essentials in our store.",
              link: "/store",
            },
          ].map((feature, index) => (
            <Link to={feature.link} key={index}>
            <motion.div
              key={index}
                className="p-4 bg-yellow-200 rounded-lg shadow-md border border-yellow-400 cursor-pointer min-h-[230px] flex flex-col justify-center"
              whileHover={{
                scale: 1.00,
                backgroundColor: "#FFD700",
                boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.3)",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-red-700">{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
            </Link>
          ))}           
        </div>
      </section>
    </main>
  );
};

export default Home;
