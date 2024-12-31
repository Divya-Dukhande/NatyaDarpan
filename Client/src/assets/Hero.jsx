import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-8 bg-white-100 p-2 relative">
      <div className="p-2 flex justify-between items-center">

        <div className="flex-1  text-center justify-center space-between md:text-left">
          Left section
        </div>

        <div className="flex justify-center items-center flex-1">
          <div className="w-full h-64 bg-yellow-200 rounded-lg">
            {/* Image or content can go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
