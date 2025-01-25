import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';
import AdminLayout from './Components/admin-view/Layout';
import AdminDashboard from './Pages/admin-view/Dashboard';
import AdminProducts from './Pages/admin-view/Products';
import AdminOrders from './Pages/admin-view/Orders';
import AdminFeatures from './Pages/admin-view/AdminFeatures';
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
            <Route path="/Login" element={<AuthLogin />} />
            <Route path="/Registeration" element={<Registeration />} />
            {/*admin*/}
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/Dashboard" element={<AdminDashboard />} />
            <Route path="/Products" element={<AdminProducts />} />
            <Route path="/Orders" element={<AdminOrders />} />          </Routes>
        </main><Route path="/Features" element={<AdminFeatures/>} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
