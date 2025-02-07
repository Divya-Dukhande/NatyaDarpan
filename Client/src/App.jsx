// 

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
import AuthLogin from './Pages/Authentication/Login';
import AuthRegister from './Pages/Authentication/Registeration';
import ShoppingCheckout from './Pages/shopping-view/Checkout';
const App = () => {
  return (
    // <Router>
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/Login" element={<AuthLogin />} />
          <Route path="/Registeration" element={<AuthRegister />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/Dashboard" element={<AdminDashboard />} />
          <Route path="/Products" element={<AdminProducts />} />
          <Route path="/Orders" element={<AdminOrders />} />
          <Route path="/Features" element={<AdminFeatures />} />

          <Route path="/shop" element={<shoppingLayout />}>
            <Route path="home" element={<ShoppingHome />} />
            <Route path="Listing" element={<ShoppingListing />} />
            <Route path="Checkout" element={<ShoppingCheckout />} />
            <Route path="Account" element={<ShoppingAccount />} />
            <Route path="*" element={<NotFound />} />
          </Route>


        </Routes>
      </main>
      <Footer />
    </div>
    // </Router>
  );
};

export default App;
