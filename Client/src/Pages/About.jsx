import React from "react";

const About = () => {
    return (
        <main className="flex justify-center items-center mt-24 w-full flex-col-reverse md:flex-col"> {/* Reversed the order in small screens */}

            {/* Section 1 */}
            <section className="w-full flex justify-center items-center px-4 md:px-16 py-10"> {/* Reduced padding */}
                {/* Left side - Text */}
                <div className="flex-col ml-5 md:flex-initial py-10 items-center justify-between md:flex-row w-full md:w-3/5"> {/* Adjusted width and padding */}
                    <h2 className="text-red-600 font-bold text-xl mb-4 text-center md:text-left"> {/* Centered for small screens, left-aligned for larger screens */}
                        Introduction to Bharatnatym
                    </h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto">
                        Bharatanatyam is a classical Indian dance form that originated in the 2nd century B.C. in Tamil Nadu, South India. It's characterized by intricate footwork, hand gestures, eye movements, and poses. Bharatanatyam is often used to tell mythological stories and express Hindu religious devotion.
                    </p>
                </div>

                {/* Right side - Image */}
                <div className="flex justify-center items-center w-full md:w-2/5">
                    <img src="/assets/images/Dance1.png" alt="Bharatanatyam Dance" className="w-full h-auto object-contain" />
                </div>
            </section>

            {/* Section 2 (Image on Left and Text on Right) */}
            <section className="w-full flex justify-center items-center mt-12 px-4 md:px-16 py-10"> {/* Reduced padding */}
                {/* Left side - Image */}
                <div className="flex justify-center items-center w-full md:w-2/5">
                    <img src="/assets/images/dance2.png" alt="Bharatanatyam Dance" className="w-full h-auto object-contain" />
                </div>

                {/* Right side - Text */}
                <div className="flex-col ml-5 md:flex-initial py-10 items-center justify-between md:flex-row w-full md:w-3/5">
                    <h2 className="text-red-600 font-bold text-xl mb-4 text-center md:text-left"> {/* Centered for small screens, left-aligned for larger screens */}
                        Significance of Bharatnatym
                    </h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto">
                        Bharatanatyam is a variety of 'Natya' yoga that reveals the spiritual self of the physical & emotional body. It is the most ancient & popular of classical Indian dance styles, all of which are based on Natya Shastra. Bharatanatyam was born in temples as an offering to Gods.
                    </p>
                </div>
            </section>

        </main>
    );
};

export default About;
