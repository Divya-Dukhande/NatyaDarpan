import React from "react";

const About = () => {
    return (
        <main className="flex justify-center items-center mt-24 w-full"> {/* Added margin-top to prevent overlap */}
            {/*section 1*/}
            <section className="w-full flex justify-center items-center">
                {/* Left side-Text */}
                <div className="flex-col ml-5 md:flex-initial py-20 items-center justify-between md:flex-row">
                    <h2 className="text-red-600 font-bold text-2xl items-center justify-between whitespace-nowrap">Introduction to Bharatnatym</h2>
                    <p className="flex-1 text-justify md:text-left text-lg leading-relaxed max-w-prose mx-auto">
                        Bharatanatyam is a classical Indian dance form that originated in the 2nd century B.C. in Tamil Nadu, South India. It's characterized by intricate footwork, hand gestures, eye movements, and poses. Bharatanatyam is often used to tell mythological stories and express Hindu religious devotion.
                    </p>
                </div>

                {/*Right side-Image*/}
                <div className="flex justify-center items center">
                    <div className="flex-1">
                        <img src="/assets/images/Dance1.png" />
                    </div>
                </div>
            </section>

            {/*Section 2*/}


        </main>
    );
};

export default About;
