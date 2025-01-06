import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';
// import Contact from './Contact';
// import Gallery from './Gallery';
// import Store from './Store';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            {/* <Route path="/gallery" element={<Gallery />} />
            <Route path="/store" element={<Store />} />  */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
