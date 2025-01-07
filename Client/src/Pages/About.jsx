import React from "react";

const About = () => {
    return (
        <main className="flex flex-col items-center mt-12 w-full"> 

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-20 space-y-6 md:space-y-0">
                {/* Left side - Text */}
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">
                        Introduction to Bharatnatym
                    </h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam is a classical Indian dance form that originated in the 2nd century B.C. in Tamil Nadu, South India. It's characterized by intricate footwork, hand gestures, eye movements, and poses. Bharatanatyam is often used to tell mythological stories and express Hindu religious devotion.Bharatanatyam is known for its fixed upper torso, bent legs, and spectacular footwork. Dancers may also use a series of mudras, or symbolic hand gestures, to tell a story.
                    </p>
                    
                </div>
                {/* Right side - Image */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/Dance1.png" alt="Bharatanatyam Dance" className="w-full max-w-lg h-auto object-contain" />
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
                {/* Left side - Image */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/dance2.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
                </div>
                {/* Right side - Text */}
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">
                        Significance of Bharatnatym
                    </h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam is a variety of 'Natya' yoga that reveals the spiritual self of the physical & emotional body. It is the most ancient & popular of classical Indian dance styles, all of which are based on Natya Shastra. Bharatanatyam was born in temples as an offering to Gods.
                    </p>
                </div>
            </section>

            {/* Section 3 (History of Bharatnatym) */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
                {/* Left side - Text */}
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">
                        History of Bharatnatym
                    </h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam originated in South India's temples over 2,000 years ago. It was originally called "Sadir" and performed by Devadasis, women who dedicated their lives to serving deities through dance and music. The dance's origins can be traced back to the Natyashastra, an ancient treatise on theater written by the mythic priest Bharata.During the 17th century, British colonization of India led to a shift in the perception of Bharatanatyam. The British associated the dance with the Devadasis, who were seen as immoral and prostitutes.Rukmini Devi Arundale, a Theosophist who trained in ballet, played a key role in reforming Bharatanatyam to emphasize its spirituality. 
                    </p>
                </div>
                {/* Right side - Image */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/History.jpg" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
                </div>
            </section>
        </main>
    );
};

export default About;
