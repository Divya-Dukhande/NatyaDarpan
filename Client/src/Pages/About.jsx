// import React from "react";

// const About = () => {
//     return (
//         <main className="flex flex-col items-center mt-12 w-full">

//             {/* Section 1 */}
//             <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-20 space-y-6 md:space-y-0">
//                 {/* Left side - Text */}
//                 <div className="w-full md:w-3/5 text-center md:text-left">
//                     <h2 className="text-red-600 font-bold text-xl mb-4">
//                         Introduction to Bharatanatym
//                     </h2>
//                     <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
//                         Bharatanatyam is a classical Indian dance form that originated in the 2nd century B.C. in Tamil Nadu, South India. It's characterized by intricate footwork, hand gestures, eye movements, and poses. Bharatanatyam is often used to tell mythological stories and express Hindu religious devotion.Bharatanatyam is known for its fixed upper torso, bent legs, and spectacular footwork. Dancers may also use a series of mudras, or symbolic hand gestures, to tell a story.
//                     </p>

//                 </div>
//                 {/* Right side - Image */}
//                 <div className="w-full md:w-2/5 flex justify-center">
//                     <img src="/assets/images/Intro.png" alt="Bharatanatyam Dance" className="w-full max-w-lg h-auto object-contain" />
//                 </div>
//             </section>

//             {/* Section 2 */}
//             <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
//                 {/* Left side - Image */}
//                 <div className="w-full md:w-2/5 flex justify-center">
//                     <img src="/assets/images/dance2.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
//                 </div>
//                 {/* Right side - Text */}
//                 <div className="w-full md:w-3/5 text-center md:text-left">
//                     <h2 className="text-red-600 font-bold text-xl mb-4">
//                         Significance of Bharatnatym
//                     </h2>
//                     <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
//                         Bharatanatyam is a variety of 'Natya' yoga that reveals the spiritual self of the physical & emotional body. It is the most ancient & popular of classical Indian dance styles, all of which are based on Natya Shastra. Bharatanatyam was born in temples as an offering to Gods.
//                     </p>
//                 </div>
//             </section>

//             {/* Section 3 (History of Bharatnatym) */}
//             <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
//                 {/* Left side - Text */}
//                 <div className="w-full md:w-3/5 text-center md:text-left">
//                     <h2 className="text-red-600 font-bold text-xl mb-4">
//                         History of Bharatnatym
//                     </h2>
//                     <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
//                         Bharatanatyam originated in South India's temples over 2,000 years ago. It was originally called "Sadir" and performed by Devadasis, women who dedicated their lives to serving deities through dance and music. The dance's origins can be traced back to the Natyashastra, an ancient treatise on theater written by the mythic priest Bharata.During the 17th century, British colonization of India led to a shift in the perception of Bharatanatyam. The British associated the dance with the Devadasis, who were seen as immoral and prostitutes.Rukmini Devi Arundale, a Theosophist who trained in ballet, played a key role in reforming Bharatanatyam to emphasize its spirituality.
//                     </p>
//                 </div>
//                 {/* Right side - Image */}
//                 <div className="w-full md:w-2/5 flex justify-center">
//                     <img src="/assets/images/History.jpg" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
//                 </div>
//             </section>

//             {/* Section 4 (Performance) */}
//             <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
//                 {/* Left side - Image */}
//                 <div className="w-full md:w-2/5 flex justify-center">
//                     <img src="/assets/images/Dance3.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
//                 </div>
//                 {/* Right side - Text */}
//                 <div className="w-full md:w-3/5 text-center md:text-left">
//                     <h2 className="text-red-600 font-bold text-xl mb-4">
//                         Performance
//                     </h2>
//                     <ul className="list-disc list-inside text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
//                         <li>
//                             <strong>Alarippu:</strong> A warm-up section that consists of a set of movements set to a beat. The word "Alarippu" means "to bloom" in Tamil.
//                         </li>
//                         <li>
//                             <strong>Jathiswaram:</strong> A section where dancers perform highly skilled postures that lead into the next phase.
//                         </li>
//                         <li>
//                             <strong>Shabdam:</strong> A section that contains both Nritta and Abhinaya, and typically includes elements honoring Lord Krishna.
//                         </li>
//                         <li>
//                             <strong>Nritta:</strong> A fast, rhythmic, and abstract part of the dance that emphasizes the beauty of movement, form, speed, range, and pattern.
//                         </li>
//                         <li>
//                             <strong>Nritya:</strong> A slower and more expressive part of the dance that attempts to communicate feelings and storyline.
//                         </li>
//                         <li>
//                             <strong>Natyam:</strong> A play that typically involves a team performance, but can also be performed by a solo dancer.
//                         </li>
//                     </ul>
//                 </div>
//             </section>

//             {/* Section 5 (Principles and Techniques) */}
//             <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
//                 {/* Left side - Text */}
//                 <div className="w-full md:w-3/5 text-center md:text-left">
//                     <h2 className="text-red-600 font-bold text-xl mb-4">
//                         Principle and Techniques of Bharatnatym
//                     </h2>
//                     <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
//                         Bharatanatyam dance is broken down into three very broad divisions: Nritta, Nritya and Natya.
//                     </p>
//                     <ul className="list-disc list-inside text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
//                         <li>
//                             <strong>Nritta:</strong> The technical aspect of the performance in which the dancer performs pure Bharata Natyam movements with particular attention to speed, pattern, form, range and rhythm without the introduction of any interpretive elements.
//                         </li>
//                         <li>
//                             <strong>Nritya:</strong> The aspect of the dance in which the dancer incorporates spiritual themes, feelings, and expressive gestures. In order to convey the Nritya, the body movements and gestures are typically slower and harmonized with the musical notes of the musical piece.
//                         </li>
//                         <li>
//                             <strong>Natya:</strong> Conveyed with the dancers maintaining particular body movements for specific characters which are communicated through interpretive dance.
//                         </li>
//                     </ul>
//                 </div>
//                 {/* Right side - Image */}
//                 <div className="w-full md:w-2/5 flex justify-center">
//                     <img src="/assets/images/Dance4.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default About;

import React, { useState } from "react";

const About = () => {
    // States for each section's extra information
    const [showMoreIntro, setShowMoreIntro] = useState(false);
    const [showMoreSignificance, setShowMoreSignificance] = useState(false);
    const [showMoreHistory, setShowMoreHistory] = useState(false);
    const [showMorePerformance, setShowMorePerformance] = useState(false);
    const [showMorePrinciples, setShowMorePrinciples] = useState(false);

    // Extra information for each section
    const extraInfo = {
        intro: (
            <span>
                Bharatanatyam is known for its fixed upper torso, bent legs, and spectacular footwork. Dancers may also use a series of mudras, or symbolic hand gestures, to tell a story.
                The dance form has evolved over centuries and is one of the most popular classical dances of India, often performed in temples and cultural events.
                It is a powerful expression of devotion, discipline, and grace that has been passed down through generations.
                <br />
                The technique of Bharatanatyam is rooted in the sacred temples of South India, and it is often performed in rituals to honor the deities. The rhythmic precision and graceful movements of the dancers portray stories and emotions through body language, facial expressions, and hand gestures.
                <br/>
                Bharatanatyam, originally performed in temples, faced a ban by the colonial British government in 1910. However, the Indian community strongly protested against this ban, leading to the dance form's revival and expansion beyond temple walls in the 20th century, where it became known as Bharatanatyam. Modern-stage productions of Bharatanatyam have gained immense popularity across India, with performances now often focusing on non-religious themes, including fusion concepts. The Thanjavur Quartet played a key role in formalizing the structure of modern Bharatanatyam, which contributed to its current form.
            </span>
        ),
        significance: (
            <span>
                The dance form is performed with precision and is highly revered as a sacred expression of devotion to Lord Shiva, the cosmic dancer.
                Bharatanatyam is also considered an important tool for expressing emotions and stories through intricate movements and rhythm.
                It is not just a dance but a form of spiritual practice that bridges the physical and spiritual worlds. Its significance extends beyond the temple walls and into the hearts of audiences across the globe.
                <br />
                Bharatanatyam is often seen as a physical manifestation of the divine, with its intricate movements symbolizing the dance of life itself. Its significance lies not only in the performance but also in the devotion that comes with it, connecting the performer to the divine through movement and expression.
                < br />
                Apart from its spiritual and cultural relevance, Bharatanatyam is a living tradition that showcases the beauty and complexity of human emotion. The dance form has become a powerful medium for storytelling, transcending religious and geographical boundaries. Over the years, it has gained global recognition and is performed worldwide, symbolizing India's rich cultural diversity and artistic legacy. The significance of Bharatanatyam extends beyond performance; it embodies the virtues of discipline, expression, and devotion, making it a revered art form with a timeless legacy.
            </span>
        ),
        history: (
            <span>
                During the 17th century, British colonization of India led to a shift in the perception of Bharatanatyam.
                The British associated the dance with the Devadasis, who were seen as immoral and prostitutes. Rukmini Devi Arundale, a Theosophist who trained in ballet,
                played a key role in reforming Bharatanatyam to emphasize its spirituality and restore its cultural dignity.
                This revival of Bharatanatyam led to its recognition as a revered art form.
                <br />
                The journey of Bharatanatyam is not just one of cultural resurgence but also a story of redefining an art form that was once marginalized.
                Rukmini Devi's efforts in bringing Bharatanatyam to the stage as a spiritual performance allowed the dance form to regain its rightful place in Indian culture.
                <br />
                The theoretical foundations of Bharatanatyam are rooted in ancient texts, primarily the Natya Shastra, a Sanskrit treatise attributed to the scholar Bharata Muni, which describes dance, drama, and performance arts. It outlines the theory of Tāṇḍava, a form of dance associated with Lord Shiva, as well as rasa (emotion), bhāva (expression), gestures, and acting techniques that form the basis of Indian classical dances. Additionally, Kootha Nool, a Tamil text taken from the Tholkappiyam (250 BCE), also contributed significantly to the understanding of Bharatanatyam’s theoretical framework. Historical references to dance in Tamil epics such as Silappatikaram and Manimegalai (2nd and 6th centuries CE) further establish Bharatanatyam's deep cultural and spiritual connections.
                <br />
                Bharatanatyam’s evolution was heavily influenced by the Devadasi system, wherein women danced in temples as an expression of devotion. However, the arrival of the British colonial rule in the 19th century led to a significant decline in the dance form’s recognition. The British associated dance with "immoral" practices, and the anti-dance movement of 1892 called for the ban of temple dancing. This culminated in the 1910 ban on temple dance performances by the Madras Presidency, under colonial pressures. The ban and the colonial view that Bharatanatyam was indecent pushed the dance form to the brink of extinction.
            </span>
        ),
        performance: (
            <span>
                Performance includes different styles like Alarippu, Jathiswaram, Shabdam, Nritta, Nritya, and Natyam.
                Each of these segments has its own special technique and purpose, contributing to the overall beauty of Bharatanatyam.
                Alarippu is a warm-up section, Jathiswaram involves complex rhythmic footwork, and Shabdam blends dance and storytelling,
                each performance offering its unique expression of devotion and artistry.
                <br />
                Bharatanatyam performances are known for their fluidity and expression, combining strong rhythmic footwork with graceful poses and intricate storytelling through dance.
                <br />
                The highlight of Bharatanatyam is its expressive storytelling through dance, where the dancer narrates stories from Hindu mythology, often focusing on deities like Lord Shiva, Vishnu, and Devi. Performers use mudras (hand gestures), facial expressions, and body movements to convey emotions and actions, engaging the audience in the dance's narrative. Bharatanatyam performances can range from pure nritta (non-expressive movement) to nritya (expressive storytelling), and even natya (drama) that brings the mythological tales to life with great artistic depth and devotion.
            </span>
        ),
        principles: (
            <span>
                Each part of Bharatanatyam holds significance: Nritta (pure movement), Nritya (expressive movement), and Natya (drama).
                These principles come together to express intricate emotions, themes, and cultural stories through precise movements, rhythmic patterns, and facial expressions.
                Bharatanatyam teaches discipline, control, and devotion, providing a holistic experience for both the performer and the audience.
                <br />
                These principles not only focus on physical expression but also emphasize inner harmony and spiritual connection. By mastering these elements, a dancer can transcend the physicality of the art form and express the deeper emotional and spiritual themes of Bharatanatyam.
                <br/>
                The techniques of Bharatanatyam blend rigorous physical training with deep emotional expression, passed down through the traditional guru-shishya (teacher-student) relationship. The core of the dance form lies in Adavus, the basic steps that form the building blocks of Bharatanatyam, focusing on precise footwork and intricate hand movements synchronized with rhythmic beats. Mudras, symbolic hand gestures, convey meanings and emotions, with each representing different objects or concepts, essential for the narrative.
                <br />
                Bharatanatyam also emphasizes postures and angles, with a fixed upper torso, bent knees (Ardhamandala), and graceful head movements, creating visual harmony. Facial expressions (Abhinaya) play a key role in expressing emotions like love, anger, or sorrow, requiring intense practice and focus. Rhythmic precision is vital, as every movement aligns with the tala (rhythmic cycle) of the music. Together, these techniques combine physical skill, emotional depth, and spiritual expression, making Bharatanatyam a holistic art form.
            </span>
        ),
    };


    return (
        <main className="flex flex-col items-center mt-12 w-full">
            {/* Introduction Section */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-20 space-y-6 md:space-y-0">
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">Introduction to Bharatanatyam</h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam is a classical Indian dance form that originated in the 2nd century B.C. in Tamil Nadu, South India.Bharatanatyam is known for its fixed upper torso, bent legs, and spectacular footwork. Dancers may also use a series of mudras, or symbolic hand gestures, to tell a story. The dance form has evolved over centuries and is one of the most popular classical dances of India, often performed in temples and cultural events. It is a powerful expression of devotion, discipline, and grace that has been passed down through generations.
                        {showMoreIntro && <span>{extraInfo.intro}</span>}
                    </p>
                    <button
                        onClick={() => setShowMoreIntro(!showMoreIntro)}
                        className="text-blue-600 mt-2"
                    >
                        {showMoreIntro ? "Read Less" : "Read More"}
                    </button>
                </div>
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/Intro.png" alt="Bharatanatyam Dance" className="w-full max-w-lg h-auto object-contain" />
                </div>
            </section>

            {/* Significance Section */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/dance2.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
                </div>
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">Significance of Bharatanatyam</h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam is a variety of 'Natya' yoga that reveals the spiritual self of the physical & emotional body. It is the most ancient & popular of classical Indian dance styles.The dance form is performed with precision and is highly revered as a sacred expression of devotion to Lord Shiva, the cosmic dancer. Bharatanatyam is also considered an important tool for expressing emotions and stories through intricate movements and rhythm. It is not just a dance but a form of spiritual practice that bridges the physical and spiritual worlds. Its significance extends beyond the temple walls and into the hearts of audiences across the globe.
                        {showMoreSignificance && <span>{extraInfo.significance}</span>}
                    </p>
                    <button
                        onClick={() => setShowMoreSignificance(!showMoreSignificance)}
                        className="text-blue-600 mt-2"
                    >
                        {showMoreSignificance ? "Read Less" : "Read More"}
                    </button>
                </div>
            </section>

            {/* History Section */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">History of Bharatanatyam</h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam originated in South India's temples over 2,000 years ago. It was originally called "Sadir" and performed by Devadasis.During the 17th century, British colonization of India led to a shift in the perception of Bharatanatyam. The British associated the dance with the Devadasis, who were seen as immoral and prostitutes. Rukmini Devi Arundale, a Theosophist who trained in ballet, played a key role in reforming Bharatanatyam to emphasize its spirituality and restore its cultural dignity. This revival of Bharatanatyam led to its recognition as a revered art form.
                        {showMoreHistory && <span>{extraInfo.history}</span>}
                    </p>
                    <button
                        onClick={() => setShowMoreHistory(!showMoreHistory)}
                        className="text-blue-600 mt-2"
                    >
                        {showMoreHistory ? "Read Less" : "Read More"}
                    </button>
                </div>
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/History.jpg" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
                </div>
            </section>

            {/* Performance Section */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/Dance3.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
                </div>
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">Performance</h2>
                    <ul className="list-disc list-inside text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        <li><strong>Alarippu:</strong> A warm-up section that consists of a set of movements.</li>
                        <li><strong>Jathiswaram:</strong> A section of the dance focused on intricate rhythmic movements.</li>
                        <li><strong>Shabdam:</strong> A segment that blends rhythmic dance and storytelling.</li>
                    </ul>
                    {showMorePerformance && <span>{extraInfo.performance}</span>}
                    <button
                        onClick={() => setShowMorePerformance(!showMorePerformance)}
                        className="text-blue-600 mt-2"
                    >
                        {showMorePerformance ? "Read Less" : "Read More"}
                    </button>
                </div>
            </section>

            {/* Principles Section */}
            <section className="flex flex-col md:flex-row w-full items-center px-4 md:px-16 py-10 space-y-6 md:space-y-0">
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h2 className="text-red-600 font-bold text-xl mb-4">Principles and Techniques of Bharatanatyam</h2>
                    <p className="text-justify text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
                        Bharatanatyam dance is broken down into three broad divisions: Nritta, Nritya, and Natya.Each part of Bharatanatyam holds significance: Nritta (pure movement), Nritya (expressive movement), and Natya (drama). These principles come together to express intricate emotions, themes, and cultural stories through precise movements, rhythmic patterns, and facial expressions. Bharatanatyam teaches discipline, control, and devotion, providing a holistic experience for both the performer and the audience.
                        {showMorePrinciples && <span>{extraInfo.principles}</span>}
                    </p>
                    <button
                        onClick={() => setShowMorePrinciples(!showMorePrinciples)}
                        className="text-blue-600 mt-2"
                    >
                        {showMorePrinciples ? "Read Less" : "Read More"}
                    </button>
                </div>
                <div className="w-full md:w-2/5 flex justify-center">
                    <img src="/assets/images/Dance4.png" alt="Bharatanatyam Dance" className="w-full max-w-sm h-auto object-contain" />
                </div>
            </section>
        </main>
    );
};

export default About;
