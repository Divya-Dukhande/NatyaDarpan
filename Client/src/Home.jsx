import React from "react";

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-8 mb-20 mt-24">
      <section className="w-10/12 max-w-6xl py-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
          {/* Left Side: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/assets/images/Natraj.png"
              alt="Dance Pose"
              className="h-56 w-58 object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Right Side: Text */}
          <div className="flex-1 text-center p-12 ">
            <p className="text-lg text-2xl font-semibold  text-red-700">
              Angikam bhuvanam yasya vacikam sarvavanmayam।
            </p>
            <p className="text-lg text-2xl font-semibold mt-2  text-red-700">
              Aharyam chandrataradi tam numah sattvikam sivam।।
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section
      <section className="text-center mt-10">
        <h1 className="text-2xl font-bold">Welcome to NatyaDarpan</h1>
        <p className="mt-2 text-lg">
          Explore the beauty and traditions of Bharatanatyam.
        </p> */}
      {/* </section> */}
    </main>
  );
};

export default Home;
